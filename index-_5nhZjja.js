(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const u={quickStrip:[{id:"strip-1",title:"CSE Student",subtitle:"Chandigarh University",icon:"graduation-cap",tag:"Academic Status"},{id:"strip-2",title:"Data Focus",subtitle:"Analytics → Data Science",icon:"chart-line",tag:"Career Target"},{id:"strip-3",title:"Currently Learning",subtitle:"Python • SQL • DSA • Statistics",icon:"code",tag:"Skill Stack"},{id:"strip-4",title:"Open To",subtitle:"Learning • Projects • Opportunities",icon:"target",tag:"Current Availability"}],about:{paragraphs:["I am a Computer Science Engineering student at Chandigarh University with a strong interest in understanding patterns within complex data and translating them into actionable solutions.","My technical journey began with core computer science concepts—programming logic, data structures, and relational databases. As I deepened my understanding of computing fundamentals, I discovered a strong affinity for analytical problem-solving and statistical reasoning.","Currently, I am actively building my expertise in Python scripting, SQL query design, database management (DBMS), data analytics, and foundational statistics. I am systematically progressing toward machine learning and data science, focusing on clean code, structured logic, and continuous learning."],transitionSteps:[{step:"01",label:"CODE",desc:"Python & Java fundamentals"},{step:"02",label:"DATA",desc:"SQL databases & structuring"},{step:"03",label:"INSIGHT",desc:"Exploratory analytics & stats"},{step:"04",label:"IMPACT",desc:"Data Science solutions"}]},skillCategories:[{id:"programming",name:"PROGRAMMING",icon:"code",skills:[{name:"Python",status:"Core Stack",statusClass:"core",desc:"Data manipulation, scripting, statistics & analytical libraries"},{name:"Java",status:"Practicing",statusClass:"practicing",desc:"Object-oriented programming, syntax, CS fundamentals"}]},{id:"data",name:"DATA & ANALYTICS",icon:"database",skills:[{name:"SQL / MySQL",status:"Core Stack",statusClass:"core",desc:"Relational queries, joins, aggregations & database management"},{name:"Data Analysis",status:"Active Focus",statusClass:"active",desc:"Exploratory data analysis, trend discovery & data cleaning"},{name:"Statistics",status:"Learning",statusClass:"learning",desc:"Descriptive statistics, probability fundamentals & distributions"}]},{id:"core-cs",name:"CORE CS",icon:"cpu",skills:[{name:"Data Structures & Algorithms",status:"Practicing",statusClass:"practicing",desc:"Arrays, hashing, searching, sorting & algorithmic logic"},{name:"DBMS",status:"Core Stack",statusClass:"core",desc:"Relational database concepts, normalization & schema design"},{name:"Object-Oriented Programming",status:"Practicing",statusClass:"practicing",desc:"Encapsulation, inheritance, polymorphism & modular design"}]},{id:"data-science",name:"DATA SCIENCE",icon:"chart-line",skills:[{name:"Python for Data Science",status:"Active Focus",statusClass:"active",desc:"Data handling with NumPy and Pandas ecosystem"},{name:"Data Analytics Workflow",status:"Practicing",statusClass:"practicing",desc:"Data cleaning, transformation & summary metrics"},{name:"Machine Learning",status:"Learning Target",statusClass:"target",desc:"Supervised learning concepts, linear models & classification"}]}],learningJourney:[{phase:"01",title:"Computer Science Foundation",status:"Foundation Completed",desc:"Developed foundational problem-solving abilities, logic development, and core computer science concepts."},{phase:"02",title:"Programming",status:"Active Practice",desc:"Mastered core Python scripting and Java fundamentals for algorithm implementation and code structure."},{phase:"03",title:"Databases & DBMS",status:"Core Competency",desc:"Acquired database management skills with MySQL, query writing, join logic, and relational modeling."},{phase:"04",title:"Data Structures & Algorithms",status:"Continuous Practice",desc:"Strengthened memory efficiency and time complexity awareness using key data structures."},{phase:"05",title:"Applied Statistics",status:"Active Learning",desc:"Studying statistical concepts, summary metrics, probability distributions, and data variance."},{phase:"06",title:"Data Analytics",status:"Current Focus",desc:"Building practical capability in data cleaning, exploratory data analysis, and numerical processing."},{phase:"07",title:"Data Science Target",status:"Future Trajectory",desc:"Targeting applied machine learning model training, predictive analytics, and end-to-end data pipelines."}],projects:[{id:"proj-1",title:"Exploratory Data Analysis Lab",status:"Currently Building",statusClass:"building",problem:"Extracting insights from unstructured raw datasets requires structured cleaning, anomaly detection, and univariate statistical summary.",approach:"Developing Python analytical scripts utilizing Pandas for data manipulation and NumPy for numerical operations.",techStack:["Python","Pandas","NumPy","Statistics"],keyLearning:"Hands-on data cleaning protocols, handling missing records, and discovering numerical correlations.",githubUrl:"https://github.com/mudilxmathur24-tech",demoUrl:null},{id:"proj-2",title:"Relational Database & Analytics Workspace",status:"Currently Building",statusClass:"building",problem:"Translating business queries into optimized relational database queries across multi-table schemas.",approach:"Structuring SQL schemas in MySQL, writing multi-join aggregations, and executing complex filtering tasks.",techStack:["SQL","MySQL","DBMS","Relational Modeling"],keyLearning:"Index optimization, grouping aggregations, and maintaining relational integrity.",githubUrl:"https://github.com/mudilxmathur24-tech",demoUrl:null},{id:"proj-3",title:"Predictive Analytics Sandbox",status:"Planned Lab Project",statusClass:"planned",problem:"Building baseline classification and regression models for real-world tabular dataset prediction.",approach:"Targeting Scikit-learn workflow execution with train-test splitting, metric evaluations, and feature scaling.",techStack:["Python","Scikit-learn","Data Science","Machine Learning"],keyLearning:"Model evaluation metrics (Accuracy, Precision, Recall) and data preprocessing pipelines.",githubUrl:"https://github.com/mudilxmathur24-tech",demoUrl:null}],certifications:[{id:"cert-1",title:"Deloitte Data Analytics Job Simulation",organization:"Deloitte",date:"Confirmed Credential",type:"Industry Simulation",desc:"Completed practical simulation tasks focusing on data analytics, business intelligence reasoning, and data-driven recommendations.",verifyUrl:"https://www.linkedin.com/in/mudil-mathur-3355a7239/"},{id:"cert-2",title:"ACP Python for Beginners",organization:"Chandigarh University",date:"Academic Certification",type:"University Program",desc:"Certified in Python programming fundamentals, control flow logic, data structures, and functional scripting.",verifyUrl:"https://www.linkedin.com/in/mudil-mathur-3355a7239/"},{id:"cert-3",title:"ACP Data Science",organization:"Chandigarh University",date:"Academic Certification",type:"University Program",desc:"Certified in core Data Science concepts, analytical methodology, numerical computing, and data exploration.",verifyUrl:"https://www.linkedin.com/in/mudil-mathur-3355a7239/"}],beyondClassroom:[{id:"hackathon-1",event:"Adobe University Hackathon 2026",role:"Participant",year:"2026",desc:"Participated in the Adobe University Hackathon, collaborating with peer student engineers to address complex technical problem statements under constrained timelines."}]},r={python:`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.8 6.84H12v.73H4.4S2 7.28 2 12.77c0 5.48 2.09 5.29 2.09 5.29H6.1v-2.92s-.11-3.49 3.44-3.49h5.17s3.34.05 3.34-3.3V5.33S18.42 2 11.91 2zm-1.85 1.77a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM12.09 22c5.47 0 5.13-2.38 5.13-2.38l-.02-2.46H12v-.73h7.6s2.4.29 2.4-5.2c0-5.48-2.09-5.29-2.09-5.29H17.9v2.92s.11 3.49-3.44 3.49H9.29s-3.34-.05-3.34 3.3v3.02S5.58 22 12.09 22zm1.85-1.77a.9.9 0 1 1 0-1.8.9.9 0 0 1 0-1.8z"/>
  </svg>`,java:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>`,database:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>`,code:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>`,cpu:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="15" x2="23" y2="15"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="15" x2="4" y2="15"></line>
  </svg>`,chartLine:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>`,graduationCap:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>`,target:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>`,award:`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>`,github:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`,linkedin:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
  </svg>`,email:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>`,arrowRight:`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>`,external:`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>`,close:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`,copy:`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>`};function k(e){return r[e]||r.code}function w(){var g,y;const e=document.getElementById("data-canvas");if(!e)return;const t=e.getContext("2d");if(!t)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.style.display="none";return}let s=e.width=((g=e.parentElement)==null?void 0:g.offsetWidth)||window.innerWidth,i=e.height=((y=e.parentElement)==null?void 0:y.offsetHeight)||window.innerHeight;const a=[],l=Math.min(Math.floor(s*i/18e3),45);class d{constructor(){this.x=Math.random()*s,this.y=Math.random()*i,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.radius=Math.random()*1.8+1,this.baseAlpha=Math.random()*.4+.2}update(){this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=s),this.x>s&&(this.x=0),this.y<0&&(this.y=i),this.y>i&&(this.y=0)}draw(){t.beginPath(),t.arc(this.x,this.y,this.radius,0,Math.PI*2),t.fillStyle=`rgba(59, 130, 246, ${this.baseAlpha})`,t.fill()}}for(let o=0;o<l;o++)a.push(new d);function p(){for(let o=0;o<a.length;o++)for(let c=o+1;c<a.length;c++){const v=a[o].x-a[c].x,f=a[o].y-a[c].y,b=Math.sqrt(v*v+f*f);if(b<130){const x=(1-b/130)*.2;t.beginPath(),t.moveTo(a[o].x,a[o].y),t.lineTo(a[c].x,a[c].y),t.strokeStyle=`rgba(59, 130, 246, ${x})`,t.lineWidth=.8,t.stroke()}}}function m(){t.clearRect(0,0,s,i),a.forEach(o=>{o.update(),o.draw()}),p(),requestAnimationFrame(m)}m(),window.addEventListener("resize",()=>{var o,c;s=e.width=((o=e.parentElement)==null?void 0:o.offsetWidth)||window.innerWidth,i=e.height=((c=e.parentElement)==null?void 0:c.offsetHeight)||window.innerHeight}),window.addEventListener("mousemove",o=>{const c=e.getBoundingClientRect();o.clientX-c.left,o.clientY-c.top})}document.addEventListener("DOMContentLoaded",()=>{w(),C(),L(),S(),E(),M(),A(),j(),I(),P(),B(),$(),D(),H(),T()});function C(){const e=(t,n)=>{const s=document.getElementById(t);s&&(s.innerHTML=n)};e("nav-github-icon",r.github),e("nav-linkedin-icon",r.linkedin),e("hero-badge-icon",r.code),e("hero-arrow-icon",r.arrowRight),e("hero-gh-icon",r.github),e("hero-in-icon",r.linkedin),e("hero-mail-icon",r.email),e("cta-gh-icon",r.external),e("cta-in-icon",r.external),e("copy-email-icon",r.copy),e("ft-gh-icon",r.github),e("ft-in-icon",r.linkedin),e("ft-mail-icon",r.email),e("modal-close-icon",r.close)}function L(){const e=document.getElementById("quick-strip-container");e&&(e.innerHTML=u.quickStrip.map(t=>`
    <div class="quick-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="quick-card-tag">${t.tag}</span>
        <span style="color: var(--accent-blue-light); display: flex;">${k(t.icon)}</span>
      </div>
      <div class="quick-card-title">${t.title}</div>
      <div class="quick-card-subtitle">${t.subtitle}</div>
    </div>
  `).join(""))}function S(){const e=document.getElementById("about-text-container"),t=document.getElementById("transition-steps-container");e&&(e.innerHTML=u.about.paragraphs.map(n=>`
      <p>${n}</p>
    `).join("")),t&&(t.innerHTML=u.about.transitionSteps.map(n=>`
      <div class="transition-step-item">
        <span class="step-number">${n.step}</span>
        <span class="step-label">${n.label}</span>
        <span class="step-desc">${n.desc}</span>
      </div>
    `).join(""))}function E(){const e=document.getElementById("skills-container");e&&(e.innerHTML=u.skillCategories.map(t=>`
    <div class="skill-block reveal">
      <div class="skill-block-header">
        <span class="skill-block-icon">${k(t.icon)}</span>
        <h3 class="skill-block-title">${t.name}</h3>
      </div>
      <div class="skill-items-list">
        ${t.skills.map(n=>`
          <div class="skill-item-card">
            <div class="skill-item-top">
              <span class="skill-name">${n.name}</span>
              <span class="status-badge ${n.statusClass}">${n.status}</span>
            </div>
            <p class="skill-desc">${n.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function M(){const e=document.getElementById("timeline-container");e&&(e.innerHTML=u.learningJourney.map(t=>`
    <div class="timeline-step reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-step-card">
        <div class="timeline-header">
          <span class="timeline-title">${t.title}</span>
          <span class="timeline-phase">${t.status}</span>
        </div>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    </div>
  `).join(""))}function A(){const e=document.getElementById("projects-container");e&&(e.innerHTML=u.projects.map(t=>`
    <div class="project-card reveal">
      <div class="project-card-top">
        <div class="project-tag-row">
          <span class="project-status ${t.statusClass}">${t.status}</span>
          <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">LAB CARD</span>
        </div>
        <h3 class="project-card-title">${t.title}</h3>
        
        <div class="project-field-label">Problem Statement</div>
        <p class="project-field-text">${t.problem}</p>

        <div class="project-field-label">Technical Approach</div>
        <p class="project-field-text">${t.approach}</p>

        <div class="project-field-label">Key Learning</div>
        <p class="project-field-text">${t.keyLearning}</p>
      </div>

      <div>
        <div class="tech-tag-group">
          ${t.techStack.map(n=>`<span class="tech-tag">${n}</span>`).join("")}
        </div>
        <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
          <a href="${t.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm" style="width: 100%;">
            View Repo
            ${r.external}
          </a>
        </div>
      </div>
    </div>
  `).join(""))}function j(){const e=document.getElementById("certs-container");e&&(e.innerHTML=u.certifications.map(t=>`
    <div class="cert-card reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="cert-org">${t.organization}</span>
        <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">${t.date}</span>
      </div>
      <h3 class="cert-title">${t.title}</h3>
      <p class="cert-desc">${t.desc}</p>
      <div style="margin-top: auto; padding-top: 0.75rem;">
        <a href="${t.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm" style="width: 100%;">
          Verify Credential
          ${r.external}
        </a>
      </div>
    </div>
  `).join(""))}function I(){const e=document.getElementById("hackathon-container");e&&(e.innerHTML=u.beyondClassroom.map(t=>`
    <div class="hackathon-card reveal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="mono" style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue);">${t.role.toUpperCase()} • ${t.year}</span>
        <span class="status-badge practicing">Verified Participation</span>
      </div>
      <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-heading);">${t.event}</h3>
      <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6;">${t.desc}</p>
    </div>
  `).join(""))}function P(){const e=document.getElementById("site-header");window.addEventListener("scroll",()=>{window.scrollY>40?e==null||e.classList.add("scrolled"):e==null||e.classList.remove("scrolled")})}function B(){const e=document.getElementById("menu-toggle-btn"),t=document.getElementById("mobile-nav"),n=document.getElementById("mobile-overlay"),s=document.querySelectorAll(".mobile-nav-link"),i=()=>{t==null||t.classList.remove("open"),n==null||n.classList.remove("open"),e==null||e.setAttribute("aria-expanded","false")};e==null||e.addEventListener("click",()=>{(t==null?void 0:t.classList.contains("open"))?i():(t==null||t.classList.add("open"),n==null||n.classList.add("open"),e==null||e.setAttribute("aria-expanded","true"))}),n==null||n.addEventListener("click",i),s.forEach(a=>a.addEventListener("click",i))}function $(){const e=document.getElementById("contact-form"),t=document.getElementById("btn-copy-email");e==null||e.addEventListener("submit",n=>{var d,p,m;n.preventDefault();const s=(d=document.getElementById("contact-name"))==null?void 0:d.value,i=(p=document.getElementById("contact-email"))==null?void 0:p.value,a=(m=document.getElementById("contact-message"))==null?void 0:m.value,l=`mailto:mudilmathur2021@gmail.com?subject=Contact%20from%20${encodeURIComponent(s)}&body=${encodeURIComponent(`From: ${s} (${i})

Message:
${a}`)}`;window.location.href=l,h("Opening mail client..."),e.reset()}),t==null||t.addEventListener("click",()=>{navigator.clipboard.writeText("mudilmathur2021@gmail.com").then(()=>{h("Email copied to clipboard!")}).catch(()=>{h("mudilmathur2021@gmail.com")})})}function h(e){const t=document.getElementById("toast"),n=document.getElementById("toast-text");!t||!n||(n.textContent=e,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},3e3))}function D(){const e=document.getElementById("btn-open-resume"),t=document.getElementById("btn-mobile-resume"),n=document.getElementById("btn-close-resume"),s=document.getElementById("btn-modal-dismiss"),i=document.getElementById("modal-resume"),a=()=>{i==null||i.classList.add("open"),i==null||i.setAttribute("aria-hidden","false")},l=()=>{i==null||i.classList.remove("open"),i==null||i.setAttribute("aria-hidden","true")};e==null||e.addEventListener("click",a),t==null||t.addEventListener("click",()=>{var d,p;(d=document.getElementById("mobile-nav"))==null||d.classList.remove("open"),(p=document.getElementById("mobile-overlay"))==null||p.classList.remove("open"),a()}),n==null||n.addEventListener("click",l),s==null||s.addEventListener("click",l),i==null||i.addEventListener("click",d=>{d.target===i&&l()})}function H(){const e=document.querySelectorAll(".reveal"),t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("active")})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});e.forEach(n=>t.observe(n))}function T(){const e=document.getElementById("current-year");e&&(e.textContent=new Date().getFullYear().toString())}
//# sourceMappingURL=index-_5nhZjja.js.map
