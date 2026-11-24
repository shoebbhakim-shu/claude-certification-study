(function(){
  'use strict';
  // Which tier's JSON to load. The site sets data-exam on <body>, or the page
  // itself can set window.EXAM_DATA_URL. Fall back to ../data/basic.json so
  // the page works when opened inside this repo's layout for review.
  var dataUrl = (document.body && document.body.dataset && document.body.dataset.exam)
                 || window.EXAM_DATA_URL
                 || '../data/basic.json';

  var state = {
    exam: null,
    order: [],
    cur: 0,
    picks: [],       // chosen choice index per question
    results: [],     // 'right' | 'wrong'
    choiceOrders: [],// shuffled choice indexes per question
    startedAt: 0,
    timerHandle: null
  };

  function shuffle(a){
    for (var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n){var r = []; for (var i = 0; i < n; i++) r.push(i); return r;}
  function fmtTime(ms){
    var s = Math.max(0, Math.floor(ms/1000));
    var m = Math.floor(s/60); s = s % 60;
    return m + ':' + (s < 10 ? '0' + s : s);
  }
  function $(id){return document.getElementById(id);}

  function load(){
    fetch(dataUrl, {cache: 'no-store'}).then(function(r){
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function(d){
      state.exam = d;
      $('ex-title').textContent = d.title || 'Practice exam';
      var intro = 'This run has ' + d.questions.length + ' multiple-choice questions.';
      if (d.prepares_for) intro += ' Prepares you for ' + d.prepares_for.split(' — ')[0] + '.';
      $('ex-intro').textContent = intro;
      $('ex-start-btn').disabled = false;
    }).catch(function(e){
      $('ex-intro').textContent = 'Could not load the question set (' + e.message + ').';
      $('ex-start-btn').disabled = true;
    });
  }

  function start(){
    var n = state.exam.questions.length;
    state.order = shuffle(range(n));
    state.picks = new Array(n).fill(-1);
    state.results = new Array(n).fill(null);
    state.choiceOrders = state.exam.questions.map(function(q){return shuffle(range(q.choices.length));});
    state.cur = 0;
    state.startedAt = Date.now();
    $('ex-start').hidden = true;
    $('ex-end').hidden = true;
    $('ex-quiz').hidden = false;
    state.timerHandle = setInterval(tick, 500);
    render();
  }

  function tick(){ $('ex-timer').textContent = fmtTime(Date.now() - state.startedAt); }

  function render(){
    var idx = state.order[state.cur];
    var q = state.exam.questions[idx];
    var choiceOrder = state.choiceOrders[idx];
    $('ex-q-no').textContent = 'Question ' + (state.cur + 1) + ' of ' + state.order.length;
    $('ex-q-topic').textContent = q.topic || '';
    $('ex-q-prompt').textContent = q.prompt;
    $('ex-count').textContent = 'Right so far: ' + state.results.filter(function(x){return x === 'right';}).length;
    var form = $('ex-q-form');
    form.innerHTML = '';
    choiceOrder.forEach(function(choiceIdx, i){
      var label = document.createElement('label');
      label.className = 'ex-choice';
      label.setAttribute('data-copy-ok', '');
      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'c';
      input.value = String(choiceIdx);
      input.addEventListener('change', onPick);
      label.appendChild(input);
      var span = document.createElement('span');
      span.textContent = q.choices[choiceIdx];
      label.appendChild(span);
      form.appendChild(label);
    });
    $('ex-check').hidden = false;
    $('ex-check').disabled = true;
    $('ex-next').hidden = true;
    $('ex-feedback').hidden = true;
    $('ex-feedback').className = 'ex-feedback';
  }

  function onPick(e){
    var labels = document.querySelectorAll('#ex-q-form .ex-choice');
    labels.forEach(function(l){ l.classList.remove('sel'); });
    e.target.parentElement.classList.add('sel');
    $('ex-check').disabled = false;
  }

  function check(){
    var idx = state.order[state.cur];
    var q = state.exam.questions[idx];
    var sel = document.querySelector('#ex-q-form input:checked');
    if (!sel) return;
    var picked = parseInt(sel.value, 10);
    state.picks[idx] = picked;
    var right = picked === q.answer;
    state.results[idx] = right ? 'right' : 'wrong';
    var labels = document.querySelectorAll('#ex-q-form .ex-choice');
    labels.forEach(function(l){
      var v = parseInt(l.querySelector('input').value, 10);
      l.classList.add('locked');
      l.querySelector('input').disabled = true;
      if (v === q.answer) l.classList.add('correct');
      else if (v === picked) l.classList.add('wrong');
    });
    var fb = $('ex-feedback');
    fb.hidden = false;
    fb.className = 'ex-feedback ' + (right ? 'good' : 'bad');
    fb.innerHTML = '<strong>' + (right ? 'Right.' : 'Not quite.') + '</strong>' +
      '<span>' + escapeHtml(q.explanation || '') + '</span>';
    $('ex-check').hidden = true;
    var nextBtn = $('ex-next');
    nextBtn.hidden = false;
    nextBtn.textContent = state.cur < state.order.length - 1 ? 'Next question' : 'See your result';
    $('ex-count').textContent = 'Right so far: ' + state.results.filter(function(x){return x === 'right';}).length;
  }

  function escapeHtml(s){
    return (s || '').replace(/[&<>]/g, function(c){
      return c === '&' ? '&amp;' : c === '<' ? '&lt;' : '&gt;';
    });
  }

  function next(){
    if (state.cur < state.order.length - 1){ state.cur++; render(); }
    else end();
  }

  function end(){
    clearInterval(state.timerHandle);
    $('ex-quiz').hidden = true;
    $('ex-end').hidden = false;
    var right = state.results.filter(function(x){return x === 'right';}).length;
    var total = state.order.length;
    var pct = Math.round(right / total * 100);
    var pass = state.exam.pass_percent || 80;
    var tookMs = Date.now() - state.startedAt;
    $('ex-end-score').textContent = right + ' / ' + total + '  (' + pct + '%)';
    var passText = pct >= pass ? 'Pass — you are ready for the real course quiz.' : 'Not a pass this run. Read the notes, try again.';
    $('ex-end-line').textContent = passText + ' Time: ' + fmtTime(tookMs) + '. Passing score: ' + pass + '%.';
    try{
      var key = 'cert-best-' + (state.exam.tier || 'x');
      var best = parseInt(localStorage.getItem(key) || '0', 10);
      if (pct > best){ localStorage.setItem(key, String(pct)); }
    } catch(e){}
    // Review
    var ol = $('ex-end-review');
    ol.innerHTML = '';
    state.order.forEach(function(idx, i){
      var q = state.exam.questions[idx];
      var picked = state.picks[idx];
      var li = document.createElement('li');
      var rq = document.createElement('span'); rq.className = 'rq'; rq.textContent = q.prompt; li.appendChild(rq);
      var youLine = document.createElement('span'); youLine.className = 'ra ' + (picked === q.answer ? 'good' : 'bad');
      youLine.textContent = 'You chose: ' + (picked >= 0 ? q.choices[picked] : '(nothing)') + (picked === q.answer ? '  ✓' : '  ✗'); li.appendChild(youLine);
      if (picked !== q.answer){
        var rightLine = document.createElement('span'); rightLine.className = 'ra good';
        rightLine.textContent = 'Right answer: ' + q.choices[q.answer]; li.appendChild(rightLine);
      }
      if (q.explanation){
        var expl = document.createElement('span'); expl.className = 'ex-expl'; expl.textContent = q.explanation; li.appendChild(expl);
      }
      ol.appendChild(li);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    $('ex-start-btn').disabled = true;
    $('ex-start-btn').addEventListener('click', start);
    $('ex-check').addEventListener('click', check);
    $('ex-next').addEventListener('click', next);
    $('ex-again').addEventListener('click', start);
    load();
  });
})();
