import React , {useState} from "react";
import LayoutLeft from "../Layout/LayoutLeft/LayoutLeft";
import LayoutRight from "../Layout/LayoutRight/LayoutRight";
import MyClubs from "./components/MyClubs";
import "./styles.css";
import ClubPage from "./components/ClubPage";

const Clubs = () => {
  const [activeclub , setactiveclub] = useState(false);
  const [clubname,setclubname] = useState("");
  const onclicking = (element)=>{
    setclubname(element);
    setactiveclub(true);
  }
  const clubdetails = [
    {
      name : "Yacc",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "yacc@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "yes",
      image : "yacc.jpg"
    },
    {
      name : "Finance Club",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "dac@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "no",
      image : "financeclub.jpg"
    },
    {
      name : "Horticulture club",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "dac@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "no",
      image : "horticulture_logo.png"
    },
    {
      name : "Curtain Call",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "curtaincall@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "yes",
      image : "curtaincall.png"
    },
    {
      name : "EBSB",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "curtaincall@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "yes",
      image : "ebsb.jpg"
    },
    {
      name : "Akshar",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "curtaincall@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "yes",
      image : "akshar.jpg"
    },
    {
      name : "Bioscope",
      description : "A dynamic and inclusive community of passionate coders and algorithmic thinkers. Our mission is to foster a deep and abiding love for coding, share knowledge , and provide platform for students to enhance their coding skills and take on real-world challenges.",
      ClubHeads : "Mangesh , Yukta" ,
      ClubLeads : "Nideesh",
      Clubemail: "curtaincall@iitpkd.ac.in",
      ContactNo : "1234567892",
      Joined : "yes",
      image : "bioscope.jpg"
    }
  ]
  return (
    <div className="d-flex flex-row">
      <div style={{ width: "20rem" }}>
        <LayoutLeft ele="clubs" />
      </div>
      <div
        className="container"
        style={{ width: "46rem", margin: "3rem 1rem", textAlign: "justify"}}>
        <div className="container">
          <h1>Clubs
          {activeclub && <button onClick={()=>{setactiveclub(false)}} style={{border:"none" , backgroundColor:"white"}}>&lt;</button>}
          </h1>
        </div>
        {! activeclub && <div>
        <div id="Clubs" className="clubs my-5" >
          <div className="container" >
            <h3>My Clubs</h3>
          </div>
            <div className="d-flex flex-row card-group">
              {clubdetails.map((items,index)=>{
                if (items.Joined==="yes"){
                  return  <MyClubs key={index} image={items.image} name={items.name} onclick={onclicking}/>
                }
                })}
            </div>
        </div>

        <div id="Clubs" className="clubs">
          {/* button at start and other at end side */}
          <div className="container d-flex justify-content-between" >
            <h3>Other Clubs</h3>
            <button type="button"  className="btn btn-primary" style={{backgroundColor: 'rgb(243 130 33) ' , borderStyle:'none' , color:"white" ,width:"5rem", float:'right' ,marginRight:"2rem"}}>View All</button>
          </div>
          <div className="d-flex flex-row card-group">
              {clubdetails.map((items,index)=>{
                if (items.Joined==="no"){
                  return  <MyClubs key={index} image={items.image} name={items.name} onclick={onclicking}/>
                }
                })}
            </div>
        </div>
        </div>}
        
        {activeclub &&  clubdetails.map(item=>{
          if (item.name===clubname){
            return <ClubPage name= {item.name} description = {item.description} ClubHeads = {item.ClubHeads} ClubLeads = {item.ClubLeads} Clubemail={item.Clubemail} ContactNo={item.ContactNo} Joined={item.Joined} image={item.image}/>
          }
        })}
      </div>
      <div style={{ width: "20rem" }}>
        <LayoutRight />
      </div>
    </div>
  );
};

export default Clubs;
