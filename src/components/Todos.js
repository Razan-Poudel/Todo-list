import React from "react";
import Card from "./Cards.js";
import { useState } from 'react';
import Empty from "./Empty_notifier.js"
import Addtodo from "./Addtodo.js"
import Addopt from "./addoption.js"

  const Todowrapper=(props)=>{

 const  [Todos, settodo] = useState([

  { h: "Meta",sno:"1", d: "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4AES3ToSFQootrWfmKsNj49ScwBgCOja4eA&usqp=CAU" },


  { h: "Google",sno:"2", d: "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.", s: "https://www.google.com.np/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
  { h: "Twitter",sno:"3", d: "Twitter, Inc. is an American social media company based in San Francisco, California. The company operates the microblogging and social networking service Twitter. It previously operated the Vine short video app and Periscope livestreaming service.", s: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC" },

  { h: "Netflix",sno:"4", d: "Netflix, Inc. is an American subscription video on-demand over-the-top streaming service and production company based in Los Gatos, California.", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqHl2X2DuQMac76eElXDAwv9BrQ_tgBLm4aA0Pew&usqp=CAE&s" },

  { h: "Youtube", sno:"5",d: "YouTube is a global online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search.", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQII-EOzEun2HHQdB3LaL2wN07Kv5wpRSZekw&usqp=CAU" },

  { h: "Nuclear fission",sno:"6", d: "Nuclear fission is the process in which heavier nuclei like Uranium is splitted into lighter nuclei like Barium and Krypton when bombarded with nucleus.", s: "https://chem.libretexts.org/@api/deki/files/63496/CNX_Chem_21_04_Fission1.jpg?revision=2" }
]
);

const [Isclosed, closeadd]=useState(true);
 
const ondelete=(todo)=> {

  //our settodo
settodo(Todos.filter((tod) => {
    return tod !== todo;
  }));

} 

const onadd=(data)=>{
  const tempobj={
    h:data.head,
    sno:Todos.length+1,
    d:data.desc,
    s:data.src,
  }
  settodo([...Todos,tempobj]);
}

const onclose=()=>{
  console.log("I am here ");
closeadd(true);
}
const onnew=()=>{
closeadd(false);

}
return(
	<div className="App">
 { !Isclosed ?
        <Addtodo onAdd={onadd} onClose={onclose} />
        : <Addopt onclk={onnew}/>
        }
      {
        Todos.length>0 ?
        Todos.map((todo) => {
          return <Card title={todo.h} description={todo.d} key={todo.sno} ifdelete={()=>{ondelete(todo)}}source={todo.s} />
        }): <Empty/>
      }
    </div>
    );

}
export default Todowrapper;