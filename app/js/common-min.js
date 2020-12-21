import*as THREE from"/libs/three/build/three.module.js";import{OrbitControls}from"/libs/three/examples/jsm/controls/OrbitControls.js";import{GLTFLoader}from"/libs/three/examples/jsm/loaders/GLTFLoader.js";document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.getElementById("SectionCountdownCanvas"),t=e.clientWidth/e.clientHeight;let n=null;const o=new THREE.Scene,s=new THREE.PerspectiveCamera(30,t,.1,1e3);s.position.set(100,150,270),o.add(s);const i=new THREE.WebGLRenderer({canvas:e,antialias:!0,alpha:!0});i.setSize(e.clientWidth,e.clientHeight),i.setClearColor(16777215,0);const l=new OrbitControls(s,i.domElement);l.target.set(0,36,0),l.enabled=!1,l.update(),(new GLTFLoader).load("model/tree.gltf",(function(e){n=e,e.scene.scale.set(7,7,7),o.add(e.scene)}));const r=new THREE.AmbientLight(7368816);o.add(r);const d=new THREE.DirectionalLight(16777215,3.6);d.position.set(10,60,60),d.target.position.set(-10,0,0),o.add(d),o.add(d.target),function e(){requestAnimationFrame(e),n&&(n.scene.rotation.y+=.03),i.render(o,s)}()}();const e=document.getElementById("btnPlay"),t=document.getElementById("bgAudio");function n(t,n,o=""){e.children[0].style.display=t,e.children[1].style.display=n,e.style.backgroundColor=o}e.addEventListener("click",(function(){t.paused?(t.play(),n("none","flex","#f25252")):(t.pause(),n("flex","none"))}));const o=document.getElementById("counterDay"),s=document.getElementById("counterHour"),i=document.getElementById("counterMinute"),l=document.getElementById("counterSeconds"),r=document.getElementById("boxCardTime"),d=document.getElementById("boxHappy"),a=new Date;let c=new Date(a.getFullYear()+1,0,1,0,0,0,0).getTime()-a.getTime(),m=c%1e3;function u(e){let t=new Object;return t.seconds=e%60,e=(e-t.seconds)/60,t.minutes=e%60,e=(e-t.minutes)/60,t.hours=e%24,t.days=(e-t.hours)/24,t}function y(e,t,n,o,s){t.innerText=e.days,e.hours<10?n.innerText="0"+e.hours:n.innerText=e.hours,e.minutes<10?o.innerText="0"+e.minutes:o.innerText=e.minutes,e.seconds<10?s.innerText="0"+e.seconds:s.innerText=e.seconds}c=(c-m)/1e3,function e(){setTimeout(()=>{y(u(c),o,s,i,l);let t=setInterval(()=>{var n,a,m;c--,c>0?y(u(c),o,s,i,l):(clearInterval(t),a=d,m=e,(n=r).style.display="none",a.style.display="block",console.log("%c%s","color: green; font: 30px monospace;","Happy New Year!"),setTimeout(()=>{console.clear(),m(),n.style.display="block",a.style.display="none"},6e4))},1e3)},m)}()});