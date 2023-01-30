/** @format */

import { Box, Flex } from '@chakra-ui/layout';
import { Text,Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DarkLogo from '../../assets/logo/logo3.png';
import External from '../../assets/external.svg';
import SmartSwap from '../../assets/smartswap-dark.png';
import Swap from '../../assets/swap.svg';
import Liquidity from '../../assets/liquidity.svg';
import YieldFarm from '../../assets/yieldfarm.svg';
import Speed from '../../assets/speed_2.gif';
import Security from '../../assets/security_2.gif';
import Fees from '../../assets/fees.gif';
import Github from '../../assets/Vectorgithub.svg';
import Linkedin from '../../assets/Vectorlinkedin.svg';
import Twitter from '../../assets/Vectortwitter.svg';
import Discord from '../../assets/Vectordiscord.svg';
import Telegram from '../../assets/Vectortelegram.svg';
import Medium from '../../assets/Vectormedium.svg';
import Polygon from '../../assets/Platformpolygon.svg';
import Close from '../../assets/closeSquare.svg';
import Ethereum from '../../assets/Groupethereum.svg';
import Phoenix from '../../assets/phx.png';
import Dogechain from '../../assets/dogechain.png';
import Tresleches from '../../assets/treschain.png';
import Binance from '../../assets/Groupbinance.svg';
import { Link } from 'react-router-dom';
import "./landingpage.css"

const Index = () => {
  const [minNav1,setMinNav1] = useState(false)
  const [minNav2,setMinNav2] = useState(false)
  const [minNav3,setMinNav3] = useState(false)
  const [navBar,setNavBar] = useState(false)

  return (
    <div style={{background:"#000C15"}} onClick={(e)=>{
      if(e.target.className !=="subList" && e.target.className !=="downArrow" && e.target.className !=="list"){
      setMinNav1(false)
      setMinNav2(false)
      setMinNav3(false)
      }
    }}>
       <header className='mainHeader'>
        <div className="header">
         <nav>
          <div className="headerTop">
           <div className="logo">
            <a href="/">
             {/* <img src="../" alt="logo" className="logo-img" />
              */}
               <Img src={DarkLogo} />
            </a>
           </div>
     
           <div className="menuToggle" onClick={()=>setNavBar(!navBar)}>
             {
             navBar ? <img src={Close} alt="" /> : <div className="barsText">
             <div className="bars"></div>
             <div className="bars"></div>
             <div className="bars"></div>
            </div>
            }
           
           </div>
          </div>
     
      <ul className="menu" style={{"right":navBar ? 0 : "100%"}}>
          
           <li className="multi_navbar" onClick={()=>{
  setMinNav2(false)
  setMinNav1(!minNav1) 
           }}>
            <div className="multi_navbar_flex">
             <div className="multi_navbar_ul_div_heading"><a className='subList'>Company</a></div>
             <div><i className="downArrow"></i></div>
            </div>
            {minNav1 &&  <ul className="multi_navbar_ul">
             <div className="multi_navbar_ul_div">
              <div>
               <li className='list'>
                <a href="https://tresleches.finance" target="_blank"
                >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">About us</p>
                  <div>
                   <p>Learn more about Tres Chain</p>
                  </div>
                 </div>
                </a>
               </li>

            
              </div>
             </div>
            </ul>}
           
           </li>
           <li className="multi_navbar multi_navbar_2" onClick={()=>{
setMinNav1(false)
setMinNav2(!minNav2)
           }}>
            <div className="multi_navbar_flex">
             <div className="multi_navbar_ul_div_heading"><a className='subList'>DApps</a></div>
             <div><i className="downArrow"></i></div>
            </div>
            {minNav2 && <ul className="multi_navbar_ul multi_navbar_ul_2">
             <div className="multi_navbar_ul_div">
              <div>
               <li className='list'>
                <a
                 href="#"
                >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">SmartSwap</p>
                  <div>
                   <p>Swap tokens directly</p>
                  </div>
                 </div>
                </a>
               </li>
               <li className='list'>
                <a
                 href="https://staking.tresleches.finance/v2"
                 target="blank"
                >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">Staking</p>
                  <div>
                   <p>Stake Your Tokens Earn More.</p>
                  </div>
                 </div>
                </a>
               </li>
               <li className='list'>
               <a href="https://play.google.com/store/apps/details?id=finance.tresleches.cakewallet" target="_blank">
                {/* <a
                href="smartbid.html"
                > */}
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">Andoid Wallet</p>
                  <div>
                   <p>CakeWallet is the most advanced blockchain wallet</p>
                  </div>
                 </div>
                </a>
               </li>

               <li className='list'>
               <a  href="https://nftminterbsc.tresleches.finance" target="_blank">
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">NFT Minter</p>
                  <div>
                   <p>NFT Mint of our dessert rolodex.</p>
                  </div>
                 </div>
                </a>
               </li>
               <li className='list'>
                {/* <a
                 href="launchpad.html"
                > */}
                   <a href="https://vote.tresleches.finance" target="_blank" >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">Vote</p>
                  <div>
                   <p>Vote</p>
                  </div>
                 </div>
                </a>
               </li>
            
              </div>
             </div>
            </ul>}
            
           </li>

           <li> 
             <a href="https://treslechescaketoken.medium.com" target="_blank">
             <Flex>Blog <img src={External} style={{marginLeft:"6px"}} />
             </Flex>
               </a>
           
           </li>
          {/* <div className="header__nav__button header__nav__bottom">
            <button className="button">
              <span><a>Launch DApps</a></span>
              <i className="downArrow"></i>
            </button>
           </div>  */}
          </ul>
          <div className="header__nav__button__wrapper">
           <div className="header__nav__button multi_navbar">
            <button className="button " onClick={()=>{
setMinNav1(false)
setMinNav2(false)
setMinNav3(!minNav3)
           }}>
              {/* <span><Link to="/swap">Launch DApps<i className="downArrow"></i></Link></span> */}
              <div className="multi_navbar_ul_div_heading"><a className='subList'>Launch DApps</a></div>
             <div style={{marginTop:"-5px"}}><i className="downArrow"></i></div>
  {minNav3 && <ul className="multi_navbar_ul">
             <div className="multi_navbar_ul_div">
              <div>
               <li className='list'>
                <a
                 href="#"
                >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">SmartSwap</p>
                  <div>
                   <p>Swap tokens directly</p>
                  </div>
                 </div>
                </a>
               </li>
               <li className='list'>
                <a
                 href="https://staking.tresleches.finance"
                 target="blank"
                >
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">Staking</p>
                  <div>
                   <p>Staking Tokens.</p>
                  </div>
                 </div>
                </a>
               </li>
               <li className='list'>
               <a
  data-toggle="tooltip"
  data-placement="bottom"
  title="coming soon"
  href="#" style={{cursor:"not-allowed"}}>
                {/* <a
                href="smartbid.html"
                > */}
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">SmartBid</p>
                  <div>
                   <p>Bid on tokens.</p>
                  </div>
                 </div>
                </a>
               </li>
               
               <li className='list'>
                {/* <a
                 href="launchpad.html"
                > */}
                   <a
  data-toggle="tooltip"
  data-placement="bottom"
  title="coming soon"
  href="#" style={{cursor:"not-allowed"}}>
                 <div className="multi_navbar_ul_div_item">
                   <p className="multi_nav_head">Vote</p>
                  <div>
                   <p>Vote on Tres Chain decisions</p>
                  </div>
                 </div>
                </a>
               </li>
            
              </div>
             </div>
            </ul>}
            
            </button> 
          
           </div>
          </div>
         </nav>
        </div>
       </header>
   <div className="wrapper">
     <main>

       
       <section className="section__1">
<div className="section__1__center">
  <h1>Tres Leches a Sweet and Smart way to Swap</h1>
  <p>Direct cross chain swapping without order books, deposits or coin wrapping. The only way to buy and mint Tres Leches Token.</p>
  <Flex justifyContent="center">
     <Link to="/swap">
 <button className="button">
    Launch DApp
  </button>
 </Link> 
  </Flex>

</div>
       </section>

       
       <section className="section__2">
         <Img src={SmartSwap} /> 
       </section>
        
        <section className="section__3">
          <div className="section__3__heading">
    <h2>Swap and Liquidity</h2>
          <p>You have a wide range of functions to perfom with the SmartSwap, either swapping out tokens, providing liquidity.</p>
          </div>
         <div className="section__3__top">
          <div>
            <img src={Swap} alt="" />
                    </div>
           <div className="section__3__text">
             <h3>Swap</h3>
             <p>To get leverage tokens to trade with, you need to have deposited a certain amount of tokens. So to get started, you go to the <Link to="/swap" style={{color:"#9BD0FD",textDecoration:"underline"}}>SmartSwap Dapp</Link>  and deposit tokens in the desired token you would like to trade with.</p>
             <div className="section__3__top__button">
              <Link to="/swap">
               <button className="button">
                 Launch DApp <span>&#8594;</span> 
               </button>
              </Link>
              
             </div>
           </div>
         </div>
         <div className="section__3__top">
           <div className="section__3__text">
             <h3>Liquidity</h3>
             <p>After depositing your trading token, you can now select a pair with said token and then set your spillage and leverage settings. You get up to 100x leverage for the amount of your deposited tokens for you to trade with.</p>
             <div className="section__3__top__button">
             <Link to="/pool">
               <button className="button">
                 Launch DApp <span>&#8594;</span>
               </button>
               </Link>
             </div>
           </div>
           <div>
           <img src={Liquidity} alt="" />
                    </div>
         </div>

        </section>
     
     <section className="section__4">
       <div className="section__4__container">
         <div className="section__4__img__container">
        <div>
        <img src={Ethereum} alt="Ethereum" />
        </div>
        <div>
        <img src={Binance} alt="Binance" />
        </div>
        <div>
        <img src={Polygon} alt="Polygon" />
        </div>
        <div>
        <img src={Phoenix} alt="Phoenix" />
        </div>
        <div>
        <img src={Dogechain} alt="Dogechain" />
        </div>
        <div>
        <img src={Tresleches} alt="Treschain" />
        </div>
       </div>
       <div className="section__4__text">
         <h2>Built across multiple platforms</h2>
         <p>Built on Ethereum, Binance SmartChain,Polygon, Phoenix and Dogechain to give you the freedom to experience more inclusivity and an extra layer of security when using our platforms.</p>
       </div> 
      </div>
       <div className="section__4__grid">
         <div>
           <div className="section__4__grid__img">
             <img src={Security} alt="security" width="60px"/>
           </div>
           <Box mt="4">
 <h4>Extra layer of security</h4>
           <p>Easily exchange between your assets without giving control of your funds to anyone.</p>
           </Box>
          
         </div>
         <div>
           <div className="section__4__grid__img">
             <img src={Fees} alt="fees" width="60px"/>
           </div>
           <Box mt="4">
              <h4>Low transaction fees</h4>
           <p>We offer you the best transaction experience with the lowest fees available.</p>
           </Box>
          
         </div>
         <div>
           <div className="section__4__grid__img">
             <img src={Speed} alt="speed" width="60px"/>
           </div>
           <Box mt="4">
<h4>Speed of light</h4>
           <p>Your transactions are processed at lightning-fast speed.</p>
           </Box>
           
         </div>
       
       </div>
       
     </section>
     <section className='section__5'>
       <h4>SmartSwap BluePrints</h4>
       <div className='section__5__link'>
         <div>
           <h6>Swap</h6>
           <p><Link to="/swap">Straight Swap</Link></p>
         </div>
         <div>
           <h6>Liquidity</h6>
           <p><Link to="/add">Add Liquidity</Link></p>
           <p><Link to="/pool">Create Liquidity Pair</Link></p>
           <p><Link to="/find">Import Liquidity Pool</Link></p>
         </div>

         <div>
           <h6>Legal</h6>
           <p><a href="https://tresleches.finance/design-compliance.html" target="_blank">Design Compliance</a></p>
           <p><a href="https://tresleches.finance/privacy-policy.html" target="_blank">Privacy Policy</a></p>
           <p><a href="https://tresleches.finance/terms-and-condition.html" target="_blank">Terms & Conditions</a></p>
         </div>
         <div>
           <h6>Contact</h6>
           <p><a href="https://twitter.com/TresLecheschain" target="_blank">Twitter</a></p>
           <p> <a href="https://t.me/Trechain" target="_blank">Telegram</a></p>
           <p><a href="https://treschain.medium.com" target="_blank">Medium</a></p>
         </div>
       </div>
     </section>
     </main>
     <footer className='mainFooter'>
      <div className="footer__top">
        <h3>Start your defi journey</h3>
        <p>Build your defi portfolio with DApps that guarantee you fast transaction times, low transaction fees and the best user experience.</p>
        <div className="footer__top__button">
          <Link to="/swap">
            
        <button className="button">Launch App</button>
          </Link>
        </div>
      </div>
      <div className="footer__link">
        <div>
          <img src="./assets/images/Darklogo.svg" alt="" />
          <p>DApps with the best experience and low fees.</p>
          <Box className="social__media__icon" mt="4">
              <a  href="https://www.linkedin.com/company/"
              target="_blank">
                 <img src={Linkedin} alt="" />
              </a>
            <a href="https://t.me/treschain" target="_blank">
              <img src={Telegram} alt="" />
            </a>
            <a href="https://discord.gg/ep29yETXFC" target="_blank">
              <img src={Discord} alt="" />
            </a>
            <a href="https://twitter.com/treslecheschain" target="_blank">
              <img src={Twitter} alt="" />
            </a>
            <a href="https://twitter.com/TresLechesToken" target="_blank">
              <img src={Medium} alt="" />
            </a>
            <a href="https://github.com/TREScake" target="_blank">
              <img src={Github} alt="" />
            </a>
          </Box>
        </div>
        <div className="footer__container">
           <div className="footer__li__link">
<div>
<p>Products</p>
<ul>
 <li><a href="https://swap.tresleches.finance/" target="_blank">SmartSwap</a></li>

 <li> <a
  data-toggle="tooltip"
  data-placement="bottom"
  title="coming soon"
  href="#"
  >Leverage Exchange
</a></li>
 <li> <a
  data-toggle="tooltip"
  data-placement="bottom"
  title="coming soon"
  href="#"
  >SmartBid</a></li>
 <li><a
  data-toggle="tooltip"
  data-placement="bottom"
  title="coming soon"
  href="#">LaunchPad</a></li>
</ul>
</div>
<div>
<p>Company</p>
<ul>
 <li><a href="https://tresleches.finance" target="_blank">About us</a> </li>

</ul>
</div>
<div>
<p>Support</p>
<ul>

</ul>
</div>
<div>
<p>Legal</p>
<ul>
 <li><a href="https://tresleches.finance/compliance.html" target="_blank">Design Compliance</a> </li>
 <li><a href="https://tresleches.finance/privacy.html" target="_blank">Private Policy</a> </li>
 <li><a href="https://tresleches.finance/api/terms.html" target="_blank">Terms & Conditions</a> </li>
</ul>
</div>
        </div> 
        </div>
      
      </div>
    </footer>
   </div>
    </div>
  );
};

export default Index;
