(()=>{const n=(n,e)=>({date:new Date,priority:"boring",Name:n,Desc:e});let e=document.querySelector(".main-container");console.log(`${e} element is present`);const o=function(){const n=[];function e(){for(let e=0;e<n.length;e++)console.log(main)}return{Tasks:n,addTask:function(o){n.push(o),console.log(n),e()},removeTask:function(o){n.splice(o,1),e()},changePriority:function(n,o){o.priority=n,e()},changeDate:function(n,o){o.date=n,e()}}}(),a=n("daks","sadf"),t=n("adsfasdf","asdfasdfasdf");o.addTask(a),o.addTask(t)})();