(async function load(){
    const Load = new FakeReact()
    Load.start(
        Load.tag('link',false,{rel:"stylesheet", href:"https://filipi-melo.github.io/load.js/load.css"}),
        Load.tag('span',false,{id:'load'},[
            Load.tag('div',false,{class:'loading',tabindex:-1},[
                Load.tag('div',false,{class:'top center float'},[
                    Load.tag('img',false,{src:'https://filipi-melo.github.io/load.js/load.png',class:'img',heigth:"100%",width:"100%"}),
                    Load.tag('h1','Loading...')
                ])    
            ])
        ])
    )
    await new Promise( call => setTimeout(call, Math.random()*1000+300))
    Load.qs("#load").innerHTML="";
})()
