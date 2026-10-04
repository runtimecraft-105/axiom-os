const $=s=>document.querySelector(s);
let h12=false;const T0=Date.now();const G=(a,b)=>`linear-gradient(160deg,${a},${b})`;
const svg=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;


/* =========================================================
   EMAILJS CONFIGURATION
   ========================================================= */

const EMAIL_CONFIG={
    publicKey:'vnuDwiUL0th1ImIoK',
    serviceId:'service_tyazhx9',
    templateId:'template_eziz466',
    toEmail:'rominkamidi82@gmail.com'
};

if(
    window.emailjs
){
    emailjs.init({
        publicKey:EMAIL_CONFIG.publicKey
    });
}


const APPS={

about:{
    n:'About',
    bg:G('#5ac8fa','#007aff'),

    ic:svg(
        '<circle cx="12" cy="8" r="4"/>' +
        '<path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'
    ),

    x:70,
    y:30,

    html:()=>`

        <div class="axiom-about">

            <!-- PROFILE -->

            <div class="about-profile">

                <div class="about-avatar">
                    R
                    <span></span>
                </div>

                <div class="about-identity">
                    <h1>Ramin Kamidi</h1>
                    <p>Software Engineer</p>

                    <div class="about-location">
                        <span>⌖</span>
                        <span>Odisha,<br>India</span>

                        <span class="about-tz">
                            TZ&nbsp;&nbsp; IST<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UTC+5:30
                        </span>
                    </div>
                </div>

            </div>


            <!-- SOCIAL -->

            <div class="about-social">

                <a
                    href="mailto:rominkamidi82@gmail.com"
                    title="Email"
                >
                    ${svg(
                        '<rect x="3" y="5" width="18" height="14" rx="2.5"/>' +
                        '<path d="m3 7 9 6 9-6"/>'
                    )}
                </a>


                <a
                    href="https://github.com/runtimecraft-105"
                    target="_blank"
                    title="GitHub"
                >
                    ${svg(
                        '<path d="M9 19c-4.2 1.3-4.2-2.1-5.8-2.7M14.8 21v-3.9c0-1.1.1-1.4-.5-2.1 2.1-.2 4.3-1 4.3-4.8 0-1.1-.4-2-1-2.7.1-.3.4-1.4-.1-2.7 0 0-.8-.3-2.8 1a9.5 9.5 0 0 0-5.1 0c-2-1.3-2.8-1-2.8-1-.5 1.3-.2 2.4-.1 2.7-.6.7-1 1.6-1 2.7 0 3.8 2.2 4.6 4.3 4.8-.5.5-.5 1-.5 2.1V21"/>'
                    )}
                </a>


                <a
                    href="#"
                    title="LinkedIn"
                    onclick="return false"
                >
                    ${svg(
                        '<path d="M6 9v12M6 5.5v.1M10 21V9h4v2c.7-1.4 2-2.3 3.8-2.3 3.2 0 4.2 2.1 4.2 5.5V21h-4v-6c0-1.5-.3-2.7-1.8-2.7S14 13.4 14 15v6z"/>'
                    )}
                </a>


                <a
                    href="https://github.com/runtimecraft-105"
                    target="_blank"
                    title="GitHub Profile"
                >
                    ${svg(
                        '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/>' +
                        '<path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>'
                    )}
                </a>

            </div>


            <!-- TABS -->

            <div class="about-tabs">

                <button
                    class="about-tab active"
                    data-about-tab="overview"
                >
                    Overview
                </button>

                <button
                    class="about-tab"
                    data-about-tab="stack"
                >
                    Stack
                </button>

                <button
                    class="about-tab"
                    data-about-tab="experience"
                >
                    Experience
                </button>

            </div>


            <!-- CONTENT -->

            <div class="about-content">

                <!-- OVERVIEW -->

                <section
                    class="about-panel active"
                    data-about-panel="overview"
                >

                    <h2>// About Me</h2>

                    <p class="about-intro">
                        I’m a builder who learns by creating. 
                        I’m fascinated by what happens behind the interface 
                        — how systems communicate, how data moves, 
                        how services scale, and how intelligent applications 
                        are built. I enjoy taking an idea, breaking it down to 
                        its fundamentals, and turning it into a working system. 
                        My current focus is backend engineering, distributed
                         systems, developer infrastructure, and AI.
                    </p>

                    <div class="about-grid">

                        <div>
                            <span>Education</span>
                            <strong>
                                B.Tech · E&amp;TC
                            </strong>
                        </div>

                        <div>
                            <span>College</span>
                            <strong>
                                IGIT Sarang
                            </strong>
                        </div>

                        <div>
                            <span>Graduation</span>
                            <strong>
                                2027
                            </strong>
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>
                                Odisha, India
                            </strong>
                        </div>

                    </div>


                    <div class="about-focus">

                        <h3>Current Focus</h3>

                        <p>
                            Backend engineering, distributed systems,
                            AI-powered applications and building
                            production-oriented software.
                        </p>

                    </div>

                </section>


                <!-- STACK -->

                <section
                    class="about-panel"
                    data-about-panel="stack"
                >

                    <h2>// System Stack</h2>


                    <div class="stack-row">
                        <span>Languages</span>
                        <strong>
                            Java, Go, Python,
                            
                        </strong>
                    </div>


                    <div class="stack-row">
                        <span>Backend</span>
                        <strong>
                            Spring Boot, REST APIs,
                            Flask, Node.js
                        </strong>
                    </div>


                    <div class="stack-row">
                        <span>Database</span>
                        <strong>
                            SQLite, MySQL,
                            PostgreSQL
                        </strong>
                    </div>


                    <div class="stack-row">
                        <span>AI</span>
                        <strong>
                            RAG, FAISS,
                            Gemini, Embeddings
                        </strong>
                    </div>


                    <div class="stack-row">
                        <span>DevOps</span>
                        <strong>
                            Docker, Git,
                            GitHub, CI/CD
                        </strong>
                    </div>


                    <div class="stack-row">
                        <span>Tools</span>
                        <strong>
                            IntelliJ IDEA,
                            Postman, Linux
                        </strong>
                    </div>

                </section>


                <!-- EXPERIENCE -->

                <section
                    class="about-panel"
                    data-about-panel="experience"
                >

                    <h2>// Experience</h2>


                    <div class="experience-item">

                        <div class="experience-dot"></div>

                        <div>

                            <h3>
                                Open source Contribution
                            </h3>

                            <span>
                                Current · 2026
                            </span>

                            <p>
                                Building backend systems,
                                AI applications and developer
                                tools while preparing for
                                software engineering roles.
                            </p>

                        </div>

                    </div>


                    <div class="experience-item">

                        <div class="experience-dot"></div>

                        <div>

                            <h3>
                                Electronics → Software
                            </h3>

                            <span>
                                IGIT Sarang · 2023–2027
                            </span>

                            <p>
                                Combining electronics fundamentals
                                with software engineering,
                                systems and programming.
                            </p>

                        </div>

                    </div>


                    <div class="experience-status">

                        <span></span>

                        Open to software engineering
                        opportunities

                    </div>

                </section>

            </div>

        </div>
    `,


    init(w){

        const tabs =
            w.querySelectorAll(
                '[data-about-tab]'
            );

        const panels =
            w.querySelectorAll(
                '[data-about-panel]'
            );


        tabs.forEach(tab=>{

            tab.onclick=()=>{

                const target =
                    tab.dataset.aboutTab;


                tabs.forEach(t=>
                    t.classList.remove(
                        'active'
                    )
                );


                panels.forEach(panel=>
                    panel.classList.remove(
                        'active'
                    )
                );


                tab.classList.add(
                    'active'
                );


                const panel =
                    w.querySelector(
                        `[data-about-panel="${target}"]`
                    );


                if(panel){
                    panel.classList.add(
                        'active'
                    );
                }

            };

        });

    }
},


projects:{
    hide:1,
    n:'My Projects',
    bg:G('#ffb340','#ff7a00'),
    ic:svg('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'),
    x:130,
    y:60,

    html:()=>`<h1 style="margin-bottom:14px">Projects</h1>

    <div class="card">
        <h2>Mini CI/CD Platform</h2>
        <p>A lightweight CI/CD platform that runs build and deploy pipelines in Docker containers, written in Go.</p>
        <div class="tags">
            <span>Go</span>
            <span>Docker</span>
            <span>Git</span>
        </div>
    </div>

    <div class="card">
        <h2>EATM Student Assistant</h2>
        <p>A RAG-based chatbot that answers student questions about the college, using FAISS for retrieval and Gemini for responses.</p>
        <div class="tags">
            <span>Python</span>
            <span>Flask</span>
            <span>Gemini</span>
            <span>FAISS</span>
        </div>
    </div>`
},


/* =========================================================
   CONTACT ME
   ========================================================= */

contact:{
    cls:'contact',
    n:'Contact Me',
    bg:G('#56b9ea','#2b8ad1'),
    ic:svg(
    '<path d="M12 3C6.477 3 2 6.58 2 11c0 2.45 1.36 4.64 3.56 6.1L4 21l4.37-2.18c1.12.38 2.34.58 3.63.58 5.523 0 10-3.58 10-8.4S17.523 3 12 3Z"/>' +
    '<path d="M7 11h.01M12 11h.01M17 11h.01" stroke-width="2.5" stroke-linecap="round"/>'
),
    x:190,
    y:50,

    html:()=>`

        <div class="mail-shell">

            <div class="mail-header">

                <div class="mail-title">

                    <div class="mail-icon">

                        ${svg(
                            '<rect x="3" y="5" width="18" height="14" rx="2.5"/>' +
                            '<path d="m3 7 9 6 9-6"/>'
                        )}

                    </div>

                    <div>
                        <h1>New Message</h1>
                        <p>Send me an email directly from this portfolio.</p>
                    </div>

                </div>

            </div>


            <form
                class="mail-form"
                id="contactForm"
            >

                <div class="mail-field">

                    <label>
                        YOUR EMAIL
                    </label>

                    <input
                        id="ce"
                        name="reply_to"
                        type="email"
                        placeholder="you@example.com"
                        autocomplete="email"
                        required
                    >

                </div>


                <div class="mail-field">

                    <label>
                        SUBJECT
                    </label>

                    <input
                        id="csu"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        required
                    >

                </div>


                <div class="mail-field">

                    <label>
                        MESSAGE
                    </label>

                    <textarea
                        id="cm"
                        name="message"
                        placeholder="Write your message..."
                        required
                    ></textarea>

                </div>


                <input
                    type="hidden"
                    name="from_name"
                    value="Portfolio Visitor"
                >


                <input
                    type="hidden"
                    name="to_email"
                    value="rominkamidi82@gmail.com"
                >


                <button
                    class="mail-send"
                    id="cs"
                    type="submit"
                >
                    Send Email
                </button>


                <p
                    class="mail-note"
                    id="cx"
                ></p>

            </form>

        </div>
    `,


    init(w){

        const form=
            w.querySelector('#contactForm');

        const button=
            w.querySelector('#cs');

        const note=
            w.querySelector('#cx');


        form.addEventListener(
            'submit',
            async e=>{

                e.preventDefault();


                note.className='mail-note';

                note.textContent='';


                /*
                 * Check EmailJS configuration
                 */

                if(
                    typeof emailjs==='undefined' ||
                    EMAIL_CONFIG.publicKey===
                    'YOUR_EMAILJS_PUBLIC_KEY'
                ){

                    note.classList.add(
                        'error'
                    );

                    note.textContent=
                        'Email service is not configured yet.';

                    return;
                }


                button.disabled=true;

                button.textContent=
                    'Sending…';


                try{

                    await emailjs.sendForm(
                        EMAIL_CONFIG.serviceId,
                        EMAIL_CONFIG.templateId,
                        form
                    );


                    note.classList.add(
                        'success'
                    );

                    note.textContent=
                        'Message sent successfully ✓';


                    form.reset();


                }catch(error){

                    console.error(
                        'EmailJS error:',
                        error
                    );


                    note.classList.add(
                        'error'
                    );

                    note.textContent=
                        'Unable to send the message. Please try again.';


                }finally{

                    button.disabled=false;

                    button.textContent=
                        'Send Email';

                }

            }
        );

    }
},


settings:{
    cls:'sett',
    n:'Settings',
    bg:G('#a1a1a6','#636366'),
    ic:svg('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.900 4.900 7 7M17 17l2.100 2.100M2 12h3M19 12h3M4.900 19.100 7 17M17 7l2.100-2.100"/>'),
    x:250,
    y:40,

    html:()=>`<div id="sv"></div>`,

    init(w){

        const sv=w.querySelector('#sv');

        const I=p=>`<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

        const WP=[

    ['Axiom Blue','url("/assets/wallpapers/axiom-blue.jpg")'],

    ['Aurora','linear-gradient(135deg,#06120f 0%,#073b3c 45%,#151044 100%)'],

    ['Ocean','linear-gradient(145deg,#020b18 0%,#06345a 48%,#0a7c83 100%)'],

    ['Violet','linear-gradient(135deg,#080512 0%,#24105f 48%,#5b21b6 100%)'],

    ['Crimson','linear-gradient(145deg,#0d0205 0%,#46101b 50%,#8b2635 100%)'],

    ['Sunset','linear-gradient(145deg,#12060a 0%,#6b241d 48%,#c45b27 100%)'],

    ['Nebula','radial-gradient(circle at 70% 25%,#493078 0%,#15142e 35%,#030307 75%)'],

    ['Graphite','linear-gradient(145deg,#080809 0%,#29292e 50%,#09090b 100%)']

];

        const nav=t=>`<div class="snav">
            <span class="bk" id="bk">‹ Settings</span>
            <span class="tt">${t}</span>
        </div>`;

        const rows=[
            [
                'about',
                'About',
                'Name, education and uptime',
                '#2f7bf5',
                I('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>')
            ],

            [
                'wp',
                'Wallpaper',
                'Change your background',
                '#a855f7',
                I('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 16-5-5-9 9"/>')
            ],

            [
                'dock',
                'Dock',
                'Position, size and magnification',
                '#ff6a00',
                I('<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>')
            ],

            [
                'clock',
                'Date &amp; Time',
                'Choose a 12 or 24 hour clock',
                '#10b981',
                I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')
            ],

            [
                'acc',
                'Accessibility',
                'Reduce motion',
                '#64748b',
                I('<circle cx="12" cy="5" r="2"/><path d="M5 9h14M12 9v6M9 21l3-6 3 6"/>')
            ]
        ];

        const seg=(id,a,cur)=>
            `<div class="seg">
                ${a.map((x,i)=>
                    `<button
                        data-${id}="${i}"
                        class="${cur==i?'on':''}"
                    >${x}</button>`
                ).join('')}
            </div>`;


        const V={

            home:()=>`
                <div style="padding:20px 0 8px">
                    ${rows.map(x=>`
                        <div
                            class="srow"
                            data-v="${x[0]}"
                        >

                            <div
                                class="stile"
                                style="background:${x[3]}"
                            >
                                ${x[4]}
                            </div>

                            <div>
                                <b>${x[1]}</b>
                                <small>${x[2]}</small>
                            </div>

                            <span class="chev">›</span>

                        </div>
                    `).join('')}
                </div>
            `,


            about:()=>nav('About')+
            `<div
                class="sec"
                style="text-align:center"
            >

                <div class="abic">R</div>

                <h2 style="margin-top:14px">
                    Ramin Kamidi
                </h2>

            </div>

            <div
                class="sec"
                style="padding-top:0"
            >

                <div class="info">

                    <div>
                        <span>Name</span>
                        <em>Ramin Kamidi</em>
                    </div>

                    <div>
                        <span>Studying</span>
                        <em>B.Tech, Electronics &amp; Telecom</em>
                    </div>

                    <div>
                        <span>College</span>
                        <em>IGIT Sarang</em>
                    </div>

                    <div>
                        <span>Graduating</span>
                        <em>2027</em>
                    </div>

                    <div>
                        <span>Location</span>
                        <em>Odisha, India</em>
                    </div>

                    <div>
                        <span>Version</span>
                        <em>1.0.0</em>
                    </div>


                    <div>
                        <span>Uptime</span>
                        <em id="up">0s</em>
                    </div>

                </div>

            </div>`,

            
            wp:()=>nav('Wallpaper')+
            `<div class="sec">

                <h2>Wallpaper</h2>

                <p>
                    Choose a background for your desktop
                </p>

                <div
                    class="opts"
                    style="grid-template-columns:repeat(auto-fit,minmax(96px,1fr))"
                >

                    ${WP.map((x,i)=>`
                        <div
                            class="opt ${document.body.dataset.wp==i?'on':''}"
                            data-w="${i}"
                        >

                            <div
                                class="thumb"
                                style="background:${x[1]}"
                            ></div>

                            ${x[0]}

                        </div>
                    `).join('')}

                </div>

            </div>`,

            
            dock:()=>nav('Dock')+
            `<div class="sec">

                <h2>Dock</h2>

                <p>
                    Customize your dock appearance and behavior
                </p>

                <h3 class="sh">
                    Position on screen
                </h3>

                <div
                    class="opts"
                    style="grid-template-columns:repeat(3,1fr)"
                >

                    ${['left','bottom','right'].map(p=>`

                        <div
                            class="opt ${dpos==p?'on':''}"
                            data-p="${p}"
                        >

                            <div class="pv">

                                <i style="${
                                    p=='bottom'
                                    ?
                                    'left:50%;bottom:5px;width:20px;height:4px;transform:translateX(-50%)'
                                    :
                                    p+':5px;top:50%;width:4px;height:20px;transform:translateY(-50%)'
                                }"></i>

                            </div>

                            ${p[0].toUpperCase()+p.slice(1)}

                        </div>

                    `).join('')}

                </div>


                <h3 class="sh">
                    Size
                </h3>

                ${seg(
                    'z',
                    ['Small','Medium','Large'],
                    dsz
                )}


                <div class="trow">

                    <div>
                        <b>Magnification</b>
                        <small>
                            Scale icons when hovering
                        </small>
                    </div>

                    <button
                        class="tog ${magOn?'on':''}"
                        id="mg"
                        aria-label="Magnification"
                    ></button>

                </div>

            </div>`,

            
            clock:()=>nav('Date & Time')+
            `<div class="sec">

                <h2>Date &amp; Time</h2>

                <p>
                    Applies to the menu bar and the desktop clock
                </p>

                <h3 class="sh">
                    Clock format
                </h3>

                ${seg(
                    'h',
                    ['24-hour','12-hour'],
                    h12?1:0
                )}

            </div>`,

            
            acc:()=>nav('Accessibility')+
            `<div class="sec">

                <h2>Accessibility</h2>

                <p>
                    Make the desktop easier on the eyes
                </p>

                <div
                    class="trow"
                    style="padding-top:0"
                >

                    <div>
                        <b>Reduce motion</b>
                        <small>
                            Turn off window and Dock animations
                        </small>
                    </div>

                    <button
                        class="tog ${document.body.classList.contains('rm')?'on':''}"
                        id="rm"
                        aria-label="Reduce motion"
                    ></button>

                </div>

            </div>`
        };


        function show(v){

            sv.innerHTML=V[v]();

            w.querySelector('.body').scrollTop=0;

            const Q=(x,f)=>
                sv.querySelectorAll(x).forEach(f);


            Q(
                '[data-v]',
                e=>e.onclick=()=>show(e.dataset.v)
            );


            const bk=
                sv.querySelector('#bk');

            if(bk)
                bk.onclick=()=>show('home');


            Q(
                '[data-w]',
                e=>e.onclick=()=>{
                    document.body.dataset.wp=e.dataset.w;
                    show('wp');
                }
            );


            Q(
                '[data-p]',
                e=>e.onclick=()=>{
                    dpos=e.dataset.p;
                    applyDock();
                    show('dock');
                }
            );


            Q(
                '[data-z]',
                e=>e.onclick=()=>{
                    dsz=+e.dataset.z;
                    applyDock();
                    show('dock');
                }
            );


            Q(
                '[data-h]',
                e=>e.onclick=()=>{
                    h12=e.dataset.h=='1';
                    tick();
                    bigclock();
                    show('clock');
                }
            );


            const mg=
                sv.querySelector('#mg');

            if(mg)
                mg.onclick=()=>{
                    magOn=!magOn;
                    mg.classList.toggle(
                        'on',
                        magOn
                    );
                };


            const rm=
                sv.querySelector('#rm');

            if(rm)
                rm.onclick=()=>{

                    const on=
                        !document.body.classList.contains('rm');

                    document.body.classList.toggle(
                        'rm',
                        on
                    );

                    rm.classList.toggle(
                        'on',
                        on
                    );

                };


            const up=
                sv.querySelector('#up');

            if(up){

                const iv=setInterval(()=>{

                    if(
                        !document.body.contains(up)
                    )
                        return clearInterval(iv);

                    const t=
                        Math.floor(
                            (Date.now()-T0)/1000
                        );

                    up.textContent=
                        (
                            t>=60
                            ?
                            Math.floor(t/60)+'m '
                            :
                            ''
                        )
                        +
                        t%60+
                        's';

                },1000);

            }

        }


        show('home');

    }
}

};


const dock=$('#dock'),
      desk=$('#desk'),
      wins={},
      pendingLaunches=new Set();

let z=10;


Object.entries(APPS)
.filter(([k,a])=>!a.hide)
.forEach(([k,a])=>{

    const d=document.createElement('div');

    d.className='app';

    d.dataset.k=k;

    d.innerHTML=`
        <span class="lb">${a.n}</span>

        <div
            class="ic"
            style="background:${a.bg}"
        >
            ${a.ic}
        </div>

        <span class="dot"></span>
    `;

    d.onclick=()=>launch(k);

    dock.append(d);

});


const icons=[
    ...dock.children
];


let cs=[],
    raf=0,
    mx=null,
    magOn=true,
    dpos='bottom',
    dsz=1;


const DS=[
    44,
    56,
    68
];


const base=()=>
    DS[dsz]*
    (
        innerWidth<480
        ?.9
        :
        1
    );


const vert=()=>
    dpos!='bottom';


function applyDock(){

    document.body.dataset.dock=
        dpos;

    icons.forEach(i=>
        i.style.width=
        i.style.height=
        base()+'px'
    );

}


function measure(){

    icons.forEach(i=>
        i.style.width=
        i.style.height=
        base()+'px'
    );

    cs=icons.map(i=>{

        const r=
            i.getBoundingClientRect();

        return vert()
            ?
            r.top+r.height/2
            :
            r.left+r.width/2;

    });

}


function paint(){

    raf=0;

    const B=base();

    icons.forEach((i,k)=>{

        const s=
            (
                mx==null ||
                !magOn
            )
            ?
            1
            :
            1+
            .7*
            Math.max(
                0,
                1-
                Math.abs(
                    mx-cs[k]
                )/110
            );

        i.style.width=
            i.style.height=
            B*s+'px';

    });

}


dock.onmouseenter=measure;


dock.onmousemove=e=>{

    mx=
        vert()
        ?
        e.clientY
        :
        e.clientX;

    if(!raf)
        raf=requestAnimationFrame(
            paint
        );

};


dock.onmouseleave=()=>{

    mx=null;

    if(!raf)
        raf=requestAnimationFrame(
            paint
        );

};


applyDock();

addEventListener(
    'resize',
    applyDock
);

function launch(k){

    const d=
        icons.find(
            i=>i.dataset.k==k
        );

    const w=
        wins[k];


    if(w){

        w.classList.remove(
            'min'
        );

        focus(w);

        return;

    }


    /*
     * Prevent duplicate launches
     * while an app is waiting to open.
     */

    if(
        pendingLaunches.has(k)
    ){
        return;
    }


    pendingLaunches.add(k);


    d.classList.add(
        'bounce'
    );


    setTimeout(
        ()=>d.classList.remove('bounce'),
        1000
    );


    setTimeout(
        ()=>{

            pendingLaunches.delete(k);

            /*
             * Check again in case the
             * app was opened by another
             * action while waiting.
             */

            if(wins[k]){
                focus(wins[k]);
                return;
            }

            open(k);

        },
        250
    );

}


function open(k){

    const a=
        APPS[k];

    const d=
        icons.find(
            i=>i.dataset.k==k
        );

    const w=
        document.createElement('div');


    w.className=
        'win '+(a.cls||'');


    const mob=
        innerWidth<720;


    w.style.left=
        mob
        ?
        '3vw'
        :
        a.x+'px';


    w.style.top=
        mob
        ?
        (10+a.y/6)+'px'
        :
        a.y+'px';


    w.innerHTML=`
        <div class="tb">

            <div class="lights">

                <i title="Close">
                    ✕
                </i>

                <i title="Minimise">
                    –
                </i>

                <i title="Zoom">
                    +
                </i>

            </div>

            <div class="t">
                ${a.n}
            </div>

        </div>

        <div class="body">
            ${a.html()}
        </div>
    `;


    desk.append(w);

    wins[k]=w;

    d.classList.add(
        'run'
    );

    focus(w);

    a.init&&a.init(w);


    const [
        c,
        m,
        f
    ]=
        w.querySelectorAll(
            '.lights i'
        );


    c.onclick=()=>{

        w.classList.add(
            'closing'
        );

        setTimeout(()=>{

            w.remove();

            delete wins[k];

            d.classList.remove(
                'run'
            );

        },220);

    };


    m.onclick=()=>{

        const r=
            d.getBoundingClientRect();

        const wr=
            w.getBoundingClientRect();


        w.style.setProperty(
            '--ox',
            (
                r.left+
                r.width/2-
                wr.left
            )+'px'
        );


        w.style.transform=
            `translate(
                ${r.left+r.width/2-wr.left-wr.width/2}px,
                ${r.top+r.height/2-wr.top-wr.height/2}px
            ) scale(.1)`;


        w.style.opacity=0;

        w.style.pointerEvents=
            'none';


        setTimeout(()=>{

            w.style.transform='';

            w.style.opacity='';

            w.style.pointerEvents='';

            w.classList.add(
                'min'
            );

        },350);

    };


    f.onclick=()=>
        w.classList.toggle(
            'full'
        );


    w.onpointerdown=()=>
        focus(w);


    const tb=
        w.querySelector(
            '.tb'
        );


    tb.ondblclick=e=>{

        if(
            !e.target.closest(
                '.lights'
            )
        )
            w.classList.toggle(
                'full'
            );

    };


    tb.onpointerdown=e=>{

        if(
            e.target.closest(
                '.lights'
            ) ||
            w.classList.contains(
                'full'
            )
        )
            return;


        const sx=
            e.clientX-
            w.offsetLeft;

        const sy=
            e.clientY-
            w.offsetTop;


        tb.setPointerCapture(
            e.pointerId
        );


        w.classList.add(
            'drag'
        );


        let q=0,
            ex,
            ey;


        tb.onpointermove=ev=>{

            ex=
                ev.clientX;

            ey=
                ev.clientY;


            if(!q)

                q=
                    requestAnimationFrame(
                        ()=>{

                            q=0;

                            w.style.left=
                                Math.max(
                                    -300,
                                    Math.min(
                                        innerWidth-80,
                                        ex-sx
                                    )
                                )+'px';


                            w.style.top=
                                Math.max(
                                    0,
                                    Math.min(
                                        innerHeight-90,
                                        ey-sy
                                    )
                                )+'px';

                        }
                    );

        };


        tb.onpointerup=()=>{

            tb.onpointermove=
                null;

            w.classList.remove(
                'drag'
            );

        };

    }

}


function focus(w){

    w.style.zIndex=
        ++z;

}


function tick(){

    $('#clock').textContent=
        new Date().toLocaleString(
            'en-US',
            {
                weekday:'short',
                month:'short',
                day:'numeric',
                hour:'numeric',
                minute:'2-digit',
                hour12:h12
            }
        );

}


tick();

setInterval(
    tick,
    1000
);


const home=
    document.createElement('div');

home.id='home';


const now=
    new Date();

const dim=
    new Date(
        now.getFullYear(),
        now.getMonth()+1,
        0
    ).getDate();

const fd=
    new Date(
        now.getFullYear(),
        now.getMonth(),
        1
    ).getDay();


home.innerHTML=`

    <div id="big">

        <div
            class="tm"
            id="tm"
        ></div>

        <div
            class="dt"
            id="dt"
        ></div>

        <div class="hi">
            Hi, I'm Ramin Kamidi.
            Open an app from the Dock.
        </div>

    </div>


    <div
        class="wg"
        style="top:14px"
    >

        <div class="mo">
            ${now.toLocaleString(
                'en-US',
                {
                    month:'long',
                    year:'numeric'
                }
            )}
        </div>

        <div class="cal">

            ${
                'SMTWTFS'
                .split('')
                .map(
                    d=>`<b>${d}</b>`
                )
                .join('')
            }

            ${
                '<i></i>'.repeat(fd)
            }

            ${
                Array.from(
                    {length:dim},
                    (_,i)=>
                        `<span class="${
                            i+1==now.getDate()
                            ?
                            'td'
                            :
                            ''
                        }">${
                            i+1
                        }</span>`
                ).join('')
            }

        </div>

    </div>


    <div class="wg nt">

        <h3>
            Open to work
        </h3>

        <p>
            Graduate software engineering roles<br>
            B.Tech E&amp;TC, IGIT Sarang, 2027
        </p>

    </div>

`;


const FI={

    hd:[
        'Macintosh HD',
        'settings',
        '<svg viewBox="0 0 54 54"><rect x="4" y="14" width="46" height="26" rx="6" fill="#d8d8de" stroke="#8e8e96"/><rect x="4" y="30" width="46" height="10" rx="5" fill="#b9b9c1"/><circle cx="42" cy="35" r="2.500" fill="#34c759"/></svg>'
    ],

    pr:[
        'Projects',
        'projects',
        '<svg viewBox="0 0 54 54"><path d="M5 14a4 4 0 0 1 4-4h12l5 5h19a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="#3aa4f5"/><path d="M5 22a4 4 0 0 1 4-4h36a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="#68c1ff"/></svg>'
    ],

    ab:[
        'About Me.txt',
        'about',
        '<svg viewBox="0 0 54 54"><path d="M12 4h22l10 10v36H12z" fill="#fff" stroke="#c7c7cc"/><path d="M34 4v10h10" fill="#e5e5ea"/><path d="M18 24h20M18 30h20M18 36h14" stroke="#aaa" stroke-width="2"/></svg>'
    ],

    ct:[
        'Contact.vcf',
        'contact',
        '<svg viewBox="0 0 54 54"><path d="M12 4h22l10 10v36H12z" fill="#fff" stroke="#c7c7cc"/><path d="M34 4v10h10" fill="#e5e5ea"/><circle cx="28" cy="27" r="5" fill="#8e8e93"/><path d="M18 42c0-6 5-9 10-9s10 3 10 9z" fill="#8e8e93"/></svg>'
    ]

};


Object.values(FI)
.filter(
    f=>!(
        f[1]=='projects' &&
        APPS.projects.hide
    )
)
.forEach(
    ([n,k,i],idx)=>{

        const d=
            document.createElement(
                'div'
            );

        d.className='di';

        d.style.top=
            (14+idx*92)+'px';

        d.innerHTML=`
            <div class="ic">
                ${i}
            </div>

            <span>
                ${n}
            </span>
        `;


        d.onclick=e=>{

            e.stopPropagation();

            home
            .querySelectorAll('.di')
            .forEach(
                x=>x.classList.remove(
                    'sel'
                )
            );

            d.classList.add(
                'sel'
            );


            if(
                matchMedia(
                    '(pointer:coarse)'
                ).matches
            )
                launch(k);

        };


        d.ondblclick=()=>
            launch(k);


        home.append(d);

    }
);


home.onclick=()=>
    home
    .querySelectorAll('.di')
    .forEach(
        x=>x.classList.remove(
            'sel'
        )
    );


desk.append(home);


function bigclock(){

    const n=
        new Date();


    $('#tm').textContent=
        n.toLocaleTimeString(
            'en-US',
            {
                hour:'numeric',
                minute:'2-digit',
                hour12:h12
            }
        );


    $('#dt').textContent=
        n.toLocaleDateString(
            'en-US',
            {
                weekday:'long',
                month:'long',
                day:'numeric'
            }
        );

}


bigclock();

setInterval(
    bigclock,
    1000
);


setTimeout(
    ()=>launch('about'),
    400
);