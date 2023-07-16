"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3767],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(a),k=r,u=s["".concat(d,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6928:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i="Basic Adapter",p={unversionedId:"adapters/BasicAdapter/BasicAdapter",id:"adapters/BasicAdapter/BasicAdapter",title:"Basic Adapter",description:"The Basic Adapter contains all of the essential entries for Typewriter. In most cases, it should be installed with Typewriter. If you haven't installed Typewriter or the adapter yet, please follow the Installation Guide first.",source:"@site/docs/adapters/BasicAdapter/BasicAdapter.md",sourceDirName:"adapters/BasicAdapter",slug:"/adapters/BasicAdapter/",permalink:"/TypeWriter/adapters/BasicAdapter/",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/adapters/BasicAdapter/BasicAdapter.md",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Adapters",permalink:"/TypeWriter/adapters/"},next:{title:"Console Command Action",permalink:"/TypeWriter/adapters/BasicAdapter/entries/action/console_run_command"}},d={},o=[{value:"Entries",id:"entries",level:2},{value:"Action",id:"action",level:3},{value:"Dialogue",id:"dialogue",level:3},{value:"Speaker",id:"speaker",level:3},{value:"Event",id:"event",level:3},{value:"Fact",id:"fact",level:3}],m={toc:o},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-adapter"},"Basic Adapter"),(0,r.kt)("p",null,"The Basic Adapter contains all of the essential entries for Typewriter. In most cases, it should be installed with Typewriter. If you haven't installed Typewriter or the adapter yet, please follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Installation-Guide"},"Installation Guide")," first."),(0,r.kt)("h2",{id:"entries"},"Entries"),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/console_run_command"},"Console Command Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Run command from console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/delayed_action"},"Delayed Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Delay an action for a certain amount of time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/drop_item"},"Drop Item Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Drop an item at location, or on player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/give_item"},"Give Item Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Give an item to the player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/player_run_command"},"Player Command Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Make player run command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/play_sound"},"Play Sound Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Play sound at player, or location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/show_title"},"Show Title Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Show a title to a player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/simple_action"},"Simple Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Simple action to modify facts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/spawn_particles"},"Spawn Particle Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Spawn particles at location")))),(0,r.kt)("h3",{id:"dialogue"},"Dialogue"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/dialogue/message"},"Message Dialogue")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a single message to the player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/dialogue/option"},"Option Dialogue")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a list of options to the player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/dialogue/random_message"},"Random Message Dialogue")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a random message from a list to a player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/dialogue/random_spoken"},"Random Spoken Dialogue")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a random selected animated message to the player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/dialogue/spoken"},"Spoken Dialogue")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a animated message to the player")))),(0,r.kt)("h3",{id:"speaker"},"Speaker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/speaker/simple_speaker"},"Simple Speaker")),(0,r.kt)("td",{parentName:"tr",align:null},"The most basic speaker")))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_block_break"},"Block Break Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When the player breaks a block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_place_block"},"Block Place Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When the player places a block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_detect_command_ran"},"Detect Command Ran Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player runs an existing command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_interact_with_block"},"Interact Block Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When the player interacts with a block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_item_pickup"},"Pickup Item Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When the player picks up an item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_player_death"},"Player Death Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player dies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_player_hit_entity"},"Player Hit Entity Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player hits an entity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_player_join"},"Player Join Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When the player joins the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_player_kill_entity"},"Player Kill Entity Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player kills an entity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_player_kill_player"},"Player Kill Player Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player kills a player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/event/on_run_command"},"Run Command Event")),(0,r.kt)("td",{parentName:"tr",align:null},"When a player runs a custom command")))),(0,r.kt)("h3",{id:"fact"},"Fact"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/fact/cron_fact"},"Cron Fact")),(0,r.kt)("td",{parentName:"tr",align:null},"Saved until a specified date, like (0 0 * * 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/fact/permanent_fact"},"Permanent Fact")),(0,r.kt)("td",{parentName:"tr",align:null},"Saved permanently, it never gets removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/fact/number_placeholder"},"Placeholder Fact Entries")),(0,r.kt)("td",{parentName:"tr",align:null},"Computed Fact for a placeholder number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/fact/session_fact"},"Session Fact")),(0,r.kt)("td",{parentName:"tr",align:null},"Saved until a player logouts of the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/fact/timed_fact"},"Timed Fact")),(0,r.kt)("td",{parentName:"tr",align:null},"Saved for a specified duration, like 20 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BasicAdapter/entries/action/random_trigger"},"Random Trigger Gate")),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly selects its connected triggers")))))}c.isMDXComponent=!0}}]);