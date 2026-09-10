const siteConfig = {
  name: 'Bhuwan Goyal',
  brand: 'BHUWAN GOYAL',
  title: 'Professional Video Editor',
  location: 'Jaipur, India',
  email: 'goyalbhuwan25@gmail.com',
  whatsapp: '918279131340',
  whatsappMessage: 'Hello, I would like to discuss a video editing project with you.',
  tagline: 'I give every edit my heart, so your story reaches theirs.',
  services: [
    ['01','✦','YouTube Video Editing','Long-form stories with a rhythm that earns the next view.'],['02','◒','Instagram Reels','Thumb-stopping edits built for the vertical screen.'],['03','↗','YouTube Shorts','Fast, sharp, and made to hold attention.'],['04','▣','Promotional Videos','A clear point of view for brands with something to say.'],['05','◐','Cinematic Video Editing','Atmosphere, emotion, and a frame that lingers.'],['06','◈','Gaming Video Editing','High-energy cuts that keep the action alive.'],['07','◍','Podcast Editing','Conversations shaped for watch time and connection.'],['08','◎','Social Media Content','A consistent visual voice across every platform.']
  ],
  skills: ['Video Editing','Color Grading','Sound Design','Motion Graphics','Captions / Subtitles','Transitions'],
  software: ['Adobe Premiere Pro','After Effects','DaVinci Resolve','Photoshop']
};
const services = siteConfig.services;
const projects = [
  {title:'Portfolio placeholder 01',cat:'youtube',label:'YouTube / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85'},
  {title:'Portfolio placeholder 02',cat:'reels',label:'Reels / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85'},
  {title:'Portfolio placeholder 03',cat:'commercial',label:'Commercial / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85'},
  {title:'Portfolio placeholder 04',cat:'cinematic',label:'Cinematic / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85'},
  {title:'Portfolio placeholder 05',cat:'youtube',label:'Podcast / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85'},
  {title:'Portfolio placeholder 06',cat:'commercial',label:'Gaming / Replace with your project',desc:'Add your project title, description and video link in this editable list.',img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85'}
];
const principles=[['01','High-quality editing','Every cut, mix, and grade is finished with intention.'],['02','Fast communication','Clear updates and quick replies keep projects moving.'],['03','Creative storytelling','I look for the feeling beneath the footage.'],['04','Attention to detail','The small choices are usually the memorable ones.'],['05','On-time delivery','A beautiful edit is only useful when it arrives on time.'],['06','Client-focused approach','Your voice stays at the center of every decision.']];
const testimonials=[['BG','Client feedback placeholder','Project type','Add a real client review here when you are ready to publish one.'],['BG','Client feedback placeholder','Project type','Add a real client review here when you are ready to publish one.'],['BG','Client feedback placeholder','Project type','Add a real client review here when you are ready to publish one.']];
const $ = (selector) => document.querySelector(selector);
function renderServices(){ $('#services-grid').innerHTML=services.map(([n,icon,title,desc])=>`<article class="service-card"><span class="service-number">${n}</span><span class="service-icon">${icon}</span><h3>${title}</h3><p>${desc}</p></article>`).join(''); }
function renderProjects(filter='all'){const list=filter==='all'?projects:projects.filter(project=>project.cat===filter);$('#portfolio-grid').innerHTML=list.map((project,index)=>`<article class="project-card reveal visible" data-project="${project.title}"><div class="project-thumb"><img src="${project.img}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=85'" alt="${project.title} project thumbnail" loading="lazy"><div class="project-overlay"><div><span class="project-play">▶</span></div><span>${String(index+1).padStart(2,'0')} / 0${list.length}</span></div></div><div class="project-meta"><strong>${project.title}</strong><span>${project.label}</span></div><p class="project-description">${project.desc}</p></article>`).join(''); document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>openModal(card.dataset.project)));}
function renderPrinciples(){ $('#principles').innerHTML=principles.map(([n,title,desc])=>`<div class="principle"><div><h3>${title}</h3><p>${desc}</p></div><span>${n}</span></div>`).join(''); }
function renderProfile(){ $('#skills-list').innerHTML=siteConfig.skills.map(skill=>`<span>${skill}</span>`).join(''); $('#software-list').innerHTML=siteConfig.software.map(tool=>`<span>${tool}</span>`).join(''); }
function renderTestimonials(index=0){const item=testimonials[index];$('#testimonial-stage').innerHTML=`<div class="testimonial-avatar testimonial-initials" aria-label="${item[1]}">${item[0]}</div><div><div class="stars">★★★★★</div><p class="testimonial-quote">${item[3]}</p></div><div class="testimonial-author"><strong>${item[1]}</strong>${item[2]}</div>`;}
function openModal(title){$('#modal-project-title').textContent=title;$('#video-modal').classList.add('open');$('#video-modal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeModal(){ $('#video-modal').classList.remove('open');$('#video-modal').setAttribute('aria-hidden','true');document.body.style.overflow=''; }
renderServices();renderProjects();renderPrinciples();renderProfile();renderTestimonials();
let testimonialIndex=0;$('#testimonial-next').addEventListener('click',()=>{testimonialIndex=(testimonialIndex+1)%testimonials.length;renderTestimonials(testimonialIndex)});$('#testimonial-prev').addEventListener('click',()=>{testimonialIndex=(testimonialIndex-1+testimonials.length)%testimonials.length;renderTestimonials(testimonialIndex)});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');renderProjects(button.dataset.filter)}));
document.querySelectorAll('[data-close-modal]').forEach(element=>element.addEventListener('click',closeModal));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});document.querySelector('[data-preview="hero"]').addEventListener('click',()=>openModal(`${siteConfig.name} — Showreel`));
const menuToggle=$('.menu-toggle');menuToggle.addEventListener('click',()=>{$('.nav-links').classList.toggle('open');menuToggle.setAttribute('aria-expanded',$('.nav-links').classList.contains('open'))});document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>$('.nav-links').classList.remove('open')));
const range=$('.comparison-media input'),after=$('.comparison-after'),handle=$('.compare-handle');range.addEventListener('input',()=>{after.style.width=`${range.value}%`;handle.style.left=`${range.value}%`});
const fileInput=$('.file-drop input');fileInput.addEventListener('change',()=>{$('#file-name').textContent=fileInput.files.length?`${fileInput.files.length} file(s) selected`:'Browse files'});
$('#inquiry-form').addEventListener('submit',(event)=>{event.preventDefault();const form=event.currentTarget;if(!form.checkValidity()){form.reportValidity();return}$('#form-status').textContent='Thanks — your inquiry is ready. I’ll be in touch within 1–2 working days.';form.reset();$('#file-name').textContent='Browse files';});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
