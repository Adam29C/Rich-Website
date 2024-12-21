import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./aboutgame.css"
import { GET_CONTACT } from '../../service/admin.service'
const AboutGames = () => {
  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  const handleClick = ()=>{
    const targetElement = document.getElementById("scroll-down")
    if(targetElement){
      targetElement.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <div >

    <Navbar/>
    <div className="about-game-main gGTSDy">
      <div className="hzeyLF">
        <h2
          style={{ paddingTop: 10, textAlign: "start" }}
          className="ilkgnf"
        >
          About The Game
        </h2>
        <p className='f-size'>
          Satta is a broad word to describe&nbsp;“betting”&nbsp;in India or Hindi.
          The Matka game is sometimes referred to as Indian Satta Matka because of
          its early popularity. If you are interested in betting games, you can
          check out the numbers game. The game of online satta matka is pretty
          simple to understand and play. With a very little study and effort you
          can become online matka play king and earn huge amount. The kalyan matka
          game which is the online matka play market was the first online matka
          market introduced by Kalyanji Bhagat in 1962 and the online matka Waroli
          market was introduced back in 70’s by Ratan Khatri.
        </p>
        <button className="dROOdw "     
        onClick={handleClick}
          id="scroll-down-button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z" />
          </svg>
          Go To Bottom
        </button>
      </div>
    </div>
    <div className="about-game-main dFgvOd">
      <div className="jcyUcB">
        <h1 className="h1-fw-600 mt-30px">This is how you play matka on Khatri555:</h1>
        <ul className="iKDfcs">
          <li className="hTaGYD f-size">
            <span >1.</span>Step 1 is to pick (3) numbers from 0–9. For example
            5,3,6 would be your first picked random numbers from given 0–9. To add
            more thrill and substance to the diversion, the numbers are then
            included/added (5 + 3 + 6) and a last number is given. In this example
            it is 14. Now, you only have have to keep one digit of this number,
            that is the last one. In this example, it will be the 4. So your first
            draw would be 5,3,6 *4.
          </li>
          <li className="hTaGYD f-size">
            <span>2.</span>There are also a second set of numbers which is drawn.
            The process is similar just like step 1. The rules for picking 2nd
            number is exactly same as the first draw. As an random case, lets
            accept the numbers 8,2,8. This gives us a sum of 18, we again just
            only keep the last digit so our last pick for the second draw of
            numbers is 8,2,8 *8
          </li>
          <li className="hTaGYD f-size">
            <span>3.</span>Our last card would resemble this: 5,3,6 *4 X 8,2,8 *8.
            Here is an example card.
          </li>
        </ul>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">How to add money in Khatri555?</h1>
        <ul className="iKDfcs">
          <li className="hTaGYD f-size">
            <span>1{/* */}.</span>Minimum Deposit is 100 /- Rs
          </li>
          <li className="hTaGYD f-size">
            <span>2{/* */}.</span>Minimum Withdraw is 500/- Rs
          </li>
          <li className="hTaGYD f-size">
            <span>3{/* */}.</span>Maximum Withdraw Is 25 Lakh Per Day.
          </li> 
          <li className="hTaGYD f-size">
            <span>4{/* */}.</span>Withdrawal request can be placed between 11 am
            to 11 pm, all 7 days.
          </li>
          <li className="hTaGYD f-size">
            <span>5{/* */}.</span>Once request is placed, amount will be.
          </li>
          <li className="hTaGYD f-size">
            <span>6{/* */}.</span>Withdraw Is Available On Saturday &amp; Sunday
            Also.
          </li>
          <li className="hTaGYD  f-size">
            <span>7{/* */}.</span>Withdraw Is Not Available On Festivals.
          </li>
          <li className="hTaGYD f-size">
            <span>8{/* */}.</span>The amount of money you deposit accordingly the
            points will be added to your corresponding ID.
          </li>
          <li className="hTaGYD f-size">
            <span>9{/* */}.</span>1 point = Rs. 1/-
          </li>
        </ul>
      </div>
      <ul className="cKTdPD">
        <li className='f-size'
        >
          The game you played and got lucky enough to win it then accordingly your
          points will be increased.If you wish to encash the points, just apply
          for withdrawal request on our Khatri555 Mobile App.
        </li>
        <li className='f-size'
        >
          In case of any inconvenience regarding the transaction of money OR
          further query then you can
          <span style={{ fontWeight: 600, marginLeft: 5 }}>
            WhatsApp us on
            <span style={{ color: "#27A966" }}> +91 {getData?.number }</span>
          </span>
        </li>
      </ul>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">Satta Matka Guide – How To Play &amp; Win Money?</h1>
        <p className='f-size'
        >
          Satta is a broad word to describe “betting” in India or Hindi. The Matka
          game is sometimes referred to as Indian Satta Matka because of its early
          popularity. If you are interested in betting games, you can check out
          the numbers game at Khatri555.com
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">WHAT IS SATTA BAZAR?</h1>
        <p className='f-size'
        >
          Satta bazar is a highly local Indian term that means betting market.
          Indians love to bet on a number of things. They enjoy taking part in
          this activity and are therefore always willing to spend a significant
          amount of money in the game of Satta. Famous Form Of Satta Matka is both
          a lottery and a number-based game, and you have to pick a number to
          actually play the game and check for the turn and see whether or not
          your number has reached the ensuing place. Satta Matka is a form of
          gambling or lottery that came into India before the country got
          independent.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">WHAT IS MATKA SATTA?</h1>
        <p className='f-size'
        >
          Matka satta is one of the well-liked forms of betting in India. In matka
          satta, slips are pulled from a large earthenware pot known as matka.
          Sometimes, the winner is declared after dealing with the playing card.
          The lead person who runs the syndicate of matka gambling is known as a
          ‘Matka King’. Kalyan and Worli are two of the most popular Matka Games.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">WHERE TO GO FOR SATTA MATKA ONLINE FOR REAL MONEY</h1>
        <p className='f-size'
        >
          Satta is not currently legal in India, but it is still big business.
          Lotteries have become more attractive online because they combine all
          lotteries on an international level, so those from India can leverage
          their bets by only picking lottery cards where the jackpot is the
          biggest. India has a relatively small lottery jackpot while the US and
          EU countries have jackpots commonly in the 100’s of millions of
          Euros/USD. For other betting games, a large majority of Indians are
          still betting with local bookies, but more are using the internet at
          online casinos and online bookies like Betway for cricket and other
          sports or casino games.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">WHERE TO GO FOR SATTA MATKA ONLINE FOR REAL MONEY</h1>
        <ul>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >You pick (3) three numbers from 0 – 9.</p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'>For example, 5,3,6 would be your first pick at random.</p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              To add more substance to the game, the numbers are then added up (5
              + 3 + 6) and a final Satta Matka number is given.
            </p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              In this example, it is 14. You only use one digit of this number,
              the last one. In this example, it will be the 4.
            </p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'>So your first draw would be 5,3,6 *4.</p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              The second set of numbers is also drawn. They are drawn in the exact
              same way as the first draw.
            </p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              As a random example, let’s assume the numbers 8,2,8. This gives us a
              total of 18, we again only use the last digit so our final pick for
              the second set of numbers is 8,2,8 *8
            </p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              Our final card would look like this: 5,3,6 *4 X 8,2,8 *8. Here is an
              example card you would find in a matka game.
            </p>
          </li>
        </ul>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">How Do You Win At Matka?</h1>
        <p className='f-size'
        >
          To win at Matka Satta, you have various rate payouts, ranging from 9/1
          to 999/1. You can bet on the chance of all numbers coming up to the
          first, last, or any other type of bet allowed by the Matka gambling
          bookie. For this reason, it can be an attractive game because of the
          payout multiples, but the game is merely a game of chance and therefore
          can not be beaten. It requires luck to win, but many are superstitious
          about their numbers and always play them, just like the lottery games.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">SATTA MATKA FEES &amp; ODDS</h1>
        <p className='f-size'
        >
          The Satta betting agent should only take a maximum of 5% of your wager
          amount assuming you win. Because the game is all luck and neither the
          agent nor the bettor has an advantage, the bookie should take home 5% on
          every Rupee wagered. Heavy betting on a certain number or combination of
          numbers can be a dangerous scenario. If those numbers come up, it is
          very likely your bookie will vanish because he can’t afford to cover the
          wagers. When the cards and numbers are picked, generally at 9 PM and 12
          at night the winners are declared. This is how a payout would occur.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">Example Of A 10 Rupees Bet:</h1>
        <ul>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              You choose the correct first number drawn: 9 X Your Wager of 10Rs =
              90 Rs.
            </p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            > Your second number is drawn: 9 X Your Wager of 10Rs = 90 Rs.</p>
          </li>
          <li>
            <span style={{ color: "#DEDFDF" }}>●</span>
            <p className='f-size'
            >
              You choose the middle number (the jodi) and the first number correct
              in combination: 90 X Your Wager = 900 Rs.{/* */}{" "}
              <span style={{ color: "#27A966", fontWeight: 600 }}>
                Play Live Lottery Games Today!
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">HISTORY OF SATTA MATKA</h1>
        <p className='f-size'
        >
          The origins of Indian Matka gambling involve wagering on the daily price
          of cotton according to the Bombay and the New York Cotton Exchange.
          Nowadays, Matka betting, or Satta King, is a popular lottery-style game.
          It involves the selection of random numbers in the hopes of hitting the
          right number combination. The winner becomes the Satta King and they
          earn the bulk of the prize pool. The legendary Ratan Khatri is popularly
          known as the Matka King. After his arrest in 1995, he had to discontinue
          his games and now crooks are running the game he loved so much by fixing
          the numbers. A big fall from grace, but his name remains legendary among
          Satta Matka games in Mumbai.
        </p>
      </div>
      <div className="jcyUcB">
        <h1 className="h1-fw-600">CONCLUSION ON SATTA MATKA</h1>
        <p className='f-size'
        >
          Big-time enthusiasts still play this game and they remember the days of
          Ratan having celebrities pull draws for him. The game has since lost
          most of its following. Indians have chosen the faster-paced action of
          online cricket betting or live dealer casinos on their mobile devices.
          IPL betting draws people like nothing else in India and fans wait
          eagerly to place bets on the event.
        </p>
      </div>
    </div>
    <div />
    <div id='scroll-down'></div>
<Footer/>
  </div>
  
  )
}

export default AboutGames