/**
 * ============================================================
 * TUNDE OYE MODICIOUS — SRC PRESIDENT CAMPAIGN 2026
 * chatbot.js  —  Universal Campaign Chatbot
 * Positioned: BOTTOM-LEFT (opposite WhatsApp which is bottom-right)
 * Included on every page via <script src="chatbot.js"></script>
 * ============================================================
 */

(function () {
  "use strict";

  /* ──────────────────────────────────────────────────────────
     KNOWLEDGE BASE  — predefined Q&A
  ────────────────────────────────────────────────────────── */
  var KB = [
    {
      triggers: ["who is tunde","about tunde","who is he","tell me about","tunde modicious","wonim tunde meaning","wonim tunde?"],
      answer: "Tunde Oye Modicious is a <strong>Political Science student at KNUST</strong> and the current <strong>Vice President of Africa Hall JCRC</strong>. He is running for SRC President (2026) under the slogan <em>\"WONIM TUNDE?\"</em> — a Twi phrase meaning <em>\"Do you know Tunde?\"</em>. Known as the <strong>Son of the Sun</strong>, he represents consistency, strength, and resilience.",
      link: { label: "Read His Full Story →", href: "about.html" }
    },
    {
      triggers: ["rebirth","what is rebirth","rebirth agenda","agenda","transformation"],
      answer: "<strong>REBIRTH</strong> is Tunde's complete transformation agenda for the KNUST SRC — turning an outdated, inactive system into a <em>modern, proactive, student-first</em> governance model. It covers: Rebuilding trust, Elevating welfare, Breaking barriers, Innovating with tech, Representing all students, Transforming governance, and Honoring every promise.",
      link: { label: "Explore REBIRTH →", href: "rebirth.html" }
    },
    {
      triggers: ["manifesto","plans","what will he do","policy","promises","pillars"],
      answer: "Tunde's manifesto has <strong>5 powerful pillars</strong>:<br><br>📚 <strong>Academic Excellence</strong> — Better resources & peer support<br>🏠 <strong>Student Welfare</strong> — Health, accommodation & mental wellness<br>💻 <strong>Digital Transformation</strong> — Smart SRC portal & online services<br>🔍 <strong>Transparency</strong> — Open finances & student involvement<br>🚀 <strong>Opportunities</strong> — Internships, startup funds & industry links",
      link: { label: "Read Full Manifesto →", href: "manifesto.html" }
    },
    {
      triggers: ["join","how can i join","volunteer","support","campaign team","be part"],
      answer: "You can join the <strong>REBIRTH Movement</strong> by filling out our Join Campaign form! Whether you want to <em>volunteer, canvas, or simply support</em> — Tunde needs YOU. Every student who stands up makes the movement stronger.",
      link: { label: "Join the Movement →", href: "join.html" }
    },
    {
      triggers: ["contact","whatsapp","reach tunde","social media","socials","how to reach"],
      answer: "Reach Tunde directly on:<br><br>📱 <strong>WhatsApp:</strong> 0530895680<br>🐦 <strong>X (Twitter):</strong> @oyemodicious<br>📸 <strong>Snapchat:</strong> @your_tunde<br>🎵 <strong>TikTok:</strong> @your_tunde<br>💼 <strong>LinkedIn:</strong> Tunde Modicious Oye",
      link: { label: "Contact Page →", href: "contact.html" }
    },
    {
      triggers: ["son of the sun","symbol","identity"],
      answer: "<strong>\"Son of the Sun\"</strong> is Tunde's identity symbol. Just as the sun rises every day — consistent, powerful, and life-giving — Tunde brings that same energy to leadership. It represents <em>resilience, warmth, and unwavering commitment</em> to every KNUST student.",
      link: { label: "Learn More →", href: "about.html" }
    },
    {
      triggers: ["slogan","wonim","twi"],
      answer: "<strong>\"WONIM TUNDE?\"</strong> is a Twi rhetorical question meaning <em>\"Do you know Tunde?\"</em> — challenging every KNUST student to discover who Tunde truly is, what he stands for, and why he is the right leader for the SRC presidency.",
      link: null
    },
    {
      triggers: ["election","when","voting","date","countdown"],
      answer: "The KNUST SRC Presidential Election 2026 is coming soon! 🗳️ Stay connected on all our social media channels for the exact election date. Make sure you are registered and ready to <strong>vote Tunde Oye Modicious</strong>!",
      link: { label: "Join the Campaign →", href: "join.html" }
    },
    {
      triggers: ["africa hall","jcrc","experience","leadership"],
      answer: "Tunde currently serves as <strong>Vice President of Africa Hall JCRC</strong> — giving him real, hands-on student governance experience. He has managed real budgets, handled student advocacy, and navigated campus administration. This makes him uniquely prepared to lead the entire SRC.",
      link: { label: "His Full Journey →", href: "about.html" }
    },
    {
      triggers: ["gallery","photos","pictures","images"],
      answer: "Check out Tunde's campaign gallery — photos from events, campus activations, and campaign moments!",
      link: { label: "View Gallery →", href: "gallery.html" }
    },
    {
      triggers: ["media","video","tiktok","coverage"],
      answer: "Watch Tunde's campaign videos, TikTok content, and media coverage — all in one place on the Media page!",
      link: { label: "Visit Media Page →", href: "media.html" }
    }
  ];

  /* Quick question buttons shown in the chat */
  var QUICK = [
    "Who is Tunde?",
    "What is REBIRTH?",
    "Manifesto highlights",
    "How can I join?",
    "Contact Tunde",
    "Son of the Sun?"
  ];

  /* Fallback response when no keyword matches */
  var FALLBACK = {
    answer: "I'm Tunde's campaign assistant! 👋 I can tell you about Tunde, the REBIRTH agenda, his manifesto, and how to get involved. Try one of the quick questions below!",
    link: { label: "Explore the Website →", href: "index.html" }
  };

  /* ──────────────────────────────────────────────────────────
     STATE
  ────────────────────────────────────────────────────────── */
  var isOpen = false;

  /* ──────────────────────────────────────────────────────────
     FIND BEST ANSWER
  ────────────────────────────────────────────────────────── */
  function findAnswer(input) {
    var lower = input.toLowerCase().trim();
    for (var i = 0; i < KB.length; i++) {
      for (var j = 0; j < KB[i].triggers.length; j++) {
        if (lower.indexOf(KB[i].triggers[j]) !== -1 || KB[i].triggers[j].indexOf(lower) !== -1) {
          return KB[i];
        }
      }
    }
    return FALLBACK;
  }

  /* ──────────────────────────────────────────────────────────
     INJECT CSS
  ────────────────────────────────────────────────────────── */
  function injectCSS() {
    var style = document.createElement("style");
    style.id = "tunde-chatbot-style";
    style.textContent = [
      /* Wrapper — positioned BOTTOM LEFT */
      "#tunde-cb-wrap{position:fixed;bottom:24px;left:24px;z-index:99990;font-family:'Segoe UI',system-ui,sans-serif;}",

      /* Toggle button */
      "#tunde-cb-btn{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#8B1A1A,#6B0F0F);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(139,26,26,.55);position:relative;z-index:2;transition:transform .2s,box-shadow .2s;}",
      "#tunde-cb-btn:hover{transform:scale(1.08);box-shadow:0 6px 26px rgba(139,26,26,.7);}",

      /* Notification badge */
      "#tunde-cb-notif{position:absolute;top:-3px;right:-3px;width:20px;height:20px;background:#D4AF37;border-radius:50%;font-size:11px;font-weight:700;color:#6B0F0F;display:flex;align-items:center;justify-content:center;border:2px solid #fff;animation:cbPulse 2s infinite;}",
      "@keyframes cbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.25)}}",

      /* Chat window */
      "#tunde-cb-win{position:absolute;bottom:68px;left:0;width:330px;max-height:500px;background:#fff;border-radius:20px;box-shadow:0 14px 50px rgba(0,0,0,.22);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(16px) scale(.96);pointer-events:none;transition:opacity .28s,transform .28s;}",
      "#tunde-cb-win.cb-open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}",

      /* Header */
      "#tunde-cb-head{background:linear-gradient(135deg,#8B1A1A,#6B0F0F);padding:13px 15px;display:flex;align-items:center;gap:10px;flex-shrink:0;}",
      "#tunde-cb-avatar{width:38px;height:38px;min-width:38px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#F4C842);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#6B0F0F;}",
      "#tunde-cb-info{flex:1;}",
      "#tunde-cb-name{color:#fff;font-weight:700;font-size:14px;}",
      "#tunde-cb-status{color:rgba(255,255,255,.7);font-size:11px;display:flex;align-items:center;gap:5px;}",
      ".cb-dot{width:7px;height:7px;background:#4ade80;border-radius:50%;animation:cbBlink 2s infinite;}",
      "@keyframes cbBlink{0%,100%{opacity:1}50%{opacity:.3}}",
      "#tunde-cb-close{background:rgba(255,255,255,.15);border:none;color:#fff;width:26px;height:26px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:background .2s;}",
      "#tunde-cb-close:hover{background:rgba(255,255,255,.3);}",

      /* Messages area */
      "#tunde-cb-msgs{flex:1;overflow-y:auto;padding:12px 11px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;}",
      "#tunde-cb-msgs::-webkit-scrollbar{width:3px;}",
      "#tunde-cb-msgs::-webkit-scrollbar-thumb{background:#e0e0e0;border-radius:3px;}",

      /* Message rows */
      ".cb-row{display:flex;gap:7px;animation:cbFadeUp .28s ease both;}",
      "@keyframes cbFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}",
      ".cb-row-bot{align-items:flex-start;}",
      ".cb-row-usr{justify-content:flex-end;}",
      ".cb-row-avatar{width:27px;height:27px;min-width:27px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#F4C842);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#6B0F0F;}",
      ".cb-bubble{max-width:82%;padding:9px 13px;border-radius:16px;font-size:13px;line-height:1.55;}",
      ".cb-bot-bubble{background:#f4f4f4;color:#222;border-top-left-radius:4px;}",
      ".cb-usr-bubble{background:linear-gradient(135deg,#8B1A1A,#B22222);color:#fff;border-top-right-radius:4px;}",
      ".cb-link{display:inline-block;margin-top:8px;color:#8B1A1A;font-weight:700;font-size:12px;border-bottom:1.5px solid #8B1A1A;transition:opacity .2s;}",
      ".cb-link:hover{opacity:.65;}",

      /* Typing dots */
      ".cb-typing{display:flex;align-items:center;gap:4px;padding:12px 15px;}",
      ".cb-typing span{width:7px;height:7px;background:#ccc;border-radius:50%;animation:cbBounce 1.1s infinite;}",
      ".cb-typing span:nth-child(2){animation-delay:.18s;}",
      ".cb-typing span:nth-child(3){animation-delay:.36s;}",
      "@keyframes cbBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}",

      /* Quick buttons */
      "#tunde-cb-quick-wrap{padding:7px 11px 4px;border-top:1px solid #f0f0f0;flex-shrink:0;}",
      "#tunde-cb-quick-lbl{font-size:10px;color:#aaa;text-transform:uppercase;letter-spacing:.6px;font-weight:600;margin-bottom:5px;}",
      "#tunde-cb-quick-btns{display:flex;flex-wrap:wrap;gap:5px;}",
      ".cb-qbtn{background:transparent;border:1.5px solid #D4AF37;color:#8B1A1A;font-size:11px;font-weight:600;padding:4px 9px;border-radius:20px;cursor:pointer;transition:all .2s;white-space:nowrap;}",
      ".cb-qbtn:hover{background:#8B1A1A;color:#fff;border-color:#8B1A1A;}",

      /* Input row */
      "#tunde-cb-inp-wrap{display:flex;align-items:center;gap:7px;padding:9px 11px;border-top:1px solid #f0f0f0;flex-shrink:0;}",
      "#tunde-cb-inp{flex:1;border:1.5px solid #e8e8e8;border-radius:22px;padding:8px 13px;font-size:13px;outline:none;transition:border-color .2s;background:#fafafa;color:#222;}",
      "#tunde-cb-inp:focus{border-color:#8B1A1A;background:#fff;}",
      "#tunde-cb-inp::placeholder{color:#bbb;}",
      "#tunde-cb-send{width:34px;height:34px;min-width:34px;background:linear-gradient(135deg,#8B1A1A,#B22222);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s;box-shadow:0 2px 8px rgba(139,26,26,.35);}",
      "#tunde-cb-send:hover{transform:scale(1.1);}",

      /* Mobile adjustments */
      "@media(max-width:480px){#tunde-cb-wrap{bottom:16px;left:12px;}#tunde-cb-win{width:calc(100vw - 50px);left:0;}}"
    ].join("");
    document.head.appendChild(style);
  }

  /* ──────────────────────────────────────────────────────────
     BUILD HTML
  ────────────────────────────────────────────────────────── */
  function buildHTML() {
    var wrap = document.createElement("div");
    wrap.id = "tunde-cb-wrap";

    wrap.innerHTML =
      /* Toggle button */
      '<button id="tunde-cb-btn" aria-label="Open campaign assistant" aria-expanded="false">' +
        '<span id="tunde-cb-icon-chat">' +
          '<svg width="23" height="23" viewBox="0 0 24 24" fill="none">' +
            '<path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>' +
            '<circle cx="8" cy="10" r="1.3" fill="#6B0F0F"/>' +
            '<circle cx="12" cy="10" r="1.3" fill="#6B0F0F"/>' +
            '<circle cx="16" cy="10" r="1.3" fill="#6B0F0F"/>' +
          '</svg>' +
        '</span>' +
        '<span id="tunde-cb-icon-x" style="display:none">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>' +
        '</span>' +
        '<span id="tunde-cb-notif">1</span>' +
      '</button>' +

      /* Chat window */
      '<div id="tunde-cb-win" role="dialog" aria-label="Tunde Campaign Assistant">' +
        /* Header */
        '<div id="tunde-cb-head">' +
          '<div id="tunde-cb-avatar">T</div>' +
          '<div id="tunde-cb-info">' +
            '<div id="tunde-cb-name">Tunde\'s Assistant</div>' +
            '<div id="tunde-cb-status"><span class="cb-dot"></span> Online — Ask me anything!</div>' +
          '</div>' +
          '<button id="tunde-cb-close" aria-label="Close chat">✕</button>' +
        '</div>' +

        /* Messages */
        '<div id="tunde-cb-msgs" role="log" aria-live="polite"></div>' +

        /* Quick questions */
        '<div id="tunde-cb-quick-wrap">' +
          '<div id="tunde-cb-quick-lbl">Quick questions</div>' +
          '<div id="tunde-cb-quick-btns"></div>' +
        '</div>' +

        /* Input */
        '<div id="tunde-cb-inp-wrap">' +
          '<input id="tunde-cb-inp" type="text" placeholder="Ask me anything…" autocomplete="off" maxlength="200" aria-label="Your message"/>' +
          '<button id="tunde-cb-send" aria-label="Send">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(wrap);
  }

  /* ──────────────────────────────────────────────────────────
     ADD MESSAGES
  ────────────────────────────────────────────────────────── */
  function addBot(html, link) {
    var msgs = document.getElementById("tunde-cb-msgs");
    var row = document.createElement("div");
    row.className = "cb-row cb-row-bot";
    row.innerHTML =
      '<div class="cb-row-avatar">T</div>' +
      '<div class="cb-bubble cb-bot-bubble">' + html +
        (link ? '<br><a class="cb-link" href="' + link.href + '">' + link.label + '</a>' : '') +
      '</div>';
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addUser(text) {
    var msgs = document.getElementById("tunde-cb-msgs");
    var row = document.createElement("div");
    row.className = "cb-row cb-row-usr";
    var safe = text.replace(/[&<>"']/g, function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});
    row.innerHTML = '<div class="cb-bubble cb-usr-bubble">' + safe + '</div>';
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addTyping() {
    var msgs = document.getElementById("tunde-cb-msgs");
    var row = document.createElement("div");
    row.id = "tunde-cb-typing-row";
    row.className = "cb-row cb-row-bot";
    row.innerHTML = '<div class="cb-row-avatar">T</div><div class="cb-bubble cb-bot-bubble cb-typing"><span></span><span></span><span></span></div>';
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
    return row;
  }

  /* ──────────────────────────────────────────────────────────
     HANDLE INPUT
  ────────────────────────────────────────────────────────── */
  function respond(text) {
    if (!text.trim()) return;
    addUser(text);
    var typing = addTyping();
    setTimeout(function() {
      typing.remove();
      var result = findAnswer(text);
      addBot(result.answer, result.link || null);
    }, 650 + Math.random() * 350);
  }

  /* ──────────────────────────────────────────────────────────
     TOGGLE OPEN/CLOSE
  ────────────────────────────────────────────────────────── */
  function toggle() {
    isOpen = !isOpen;
    var win = document.getElementById("tunde-cb-win");
    var iconChat = document.getElementById("tunde-cb-icon-chat");
    var iconX = document.getElementById("tunde-cb-icon-x");
    var notif = document.getElementById("tunde-cb-notif");
    var btn = document.getElementById("tunde-cb-btn");

    if (isOpen) {
      win.classList.add("cb-open");
      iconChat.style.display = "none";
      iconX.style.display = "block";
      notif.style.display = "none";
      btn.setAttribute("aria-expanded","true");
      document.getElementById("tunde-cb-inp").focus();
    } else {
      win.classList.remove("cb-open");
      iconChat.style.display = "block";
      iconX.style.display = "none";
      btn.setAttribute("aria-expanded","false");
    }
  }

  /* ──────────────────────────────────────────────────────────
     BUILD QUICK BUTTONS
  ────────────────────────────────────────────────────────── */
  function buildQuick() {
    var container = document.getElementById("tunde-cb-quick-btns");
    QUICK.forEach(function(q) {
      var btn = document.createElement("button");
      btn.className = "cb-qbtn";
      btn.textContent = q;
      btn.addEventListener("click", function() { respond(q); });
      container.appendChild(btn);
    });
  }

  /* ──────────────────────────────────────────────────────────
     BIND EVENTS
  ────────────────────────────────────────────────────────── */
  function bindEvents() {
    document.getElementById("tunde-cb-btn").addEventListener("click", toggle);
    document.getElementById("tunde-cb-close").addEventListener("click", toggle);

    var inp = document.getElementById("tunde-cb-inp");
    var send = document.getElementById("tunde-cb-send");

    send.addEventListener("click", function() {
      var v = inp.value.trim();
      if (v) { respond(v); inp.value = ""; }
    });
    inp.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        var v = inp.value.trim();
        if (v) { respond(v); inp.value = ""; }
      }
    });
  }

  /* ──────────────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────────────── */
  function init() {
    injectCSS();
    buildHTML();
    bindEvents();
    buildQuick();
    /* Show greeting after brief delay */
    setTimeout(function() {
      addBot("👋 Hi! I'm Tunde's campaign assistant. I'm here to tell you all about <strong>Tunde Oye Modicious</strong> and the <strong>REBIRTH agenda</strong>. What would you like to know?", null);
    }, 700);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();