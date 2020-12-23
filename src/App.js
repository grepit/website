import logo from './pen.jpeg';
import me from './me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
</header>
<body className="App-body">
       <h4> About me</h4>

       <p>Currently, I’m a Devops Engineer at Amazon but  automation and system improvements have always been part of my career interest (even when I was a software engineer). 
       </p>
         <p>
         I’m a big advocate of open source technology and love Linux, Docker, Python. More recently I've become interested in Cloud in particular AWS and related technologies such as Terraform and CDK (which I'm a big fan). 
</p>
<p>
My passion for technology does not end at work !! For example, I built a baby monitor for my son using Raspberry Pi so I could see him on our smart TV or any of our smartphones !!
</p>
<p>
Another example I can share with you about my love for technology is Alexa, I recently explored building Alexa app/skill. I learned about how to work with voice interfaces. I still have not published 
my Alexa skill because I'm gathering information and see what I can build that's actually usable and would benefit others. Look out there for me....and my Alexa skill coming soon...
</p>
<p>
In terms of work ...I'm passionate about Infrastructure/System Automation including cloud, container, seveless applications, API Linux and open source advocate and love to automate using Python.Also, 
I'm well aware of emergency response, monitoring and change management processes. I have worked across global/distributed teams and I've learned best practices around Follow the Sun Model.
</p>
<p>
In terms of personality, I love being around people and I enjoy helping others in particular about programming or tools. I also like outdoor activities and my favorite outdoor acticty is tent camping + s'mores!

</p>
<img src={me} height="220" width="240" className="App-image"  />

<h4>Favorite Netflix series & movies </h4>
<p>
Well, I like watching movies and here are some of my favorites:
<ul>
<li>The Three Stooges (classic all time favorite)</li>
<li>Breaking Bad</li>
<li>Better Call Saul</li>
<li>The Queen's Gambit</li>
<li>The Best Offer</li>
<li>The Gift</li>
<li>Wind River</li>
<li>No Escape</li>
<li>Secret in Their Eyes</li>
<li>Zodiac</li>
<li>The village</li>
<li>NightCrawler</li>
<li>Blindsided</li>
<li>Before I Go to Sleep</li>
<li>Friends</li>
<li>People I admire in Tech.</li>
<li>Linus Torvalds</li>
<li>Guido van Rossum</li>
<li>Robert Love</li>
<li>Solomon Hykes</li>
<li>(Gang of Four) Erich Gamma, John Vlissides, Richard Helm, Ralph Johnson</li>
<li>Andy Jassy</li>
</ul>
</p>

<h4>Contact</h4>
<p>
if you would like to contact me just send me an e-mail to aghamoa at yahoo dot com
</p>

        
        </body>
    
    </div>
  );
}

export default App;
