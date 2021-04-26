import React, {useEffect, useState}  from "react";
import {Switch, Route, HashRouter } from "react-router-dom";
import Home from './Home/Home';
import styles from "./App.module.css";
import { isEmpty } from "lodash";
import Feedback from "./Feedback/Feedback.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import PetItemsList from "./PetItemsList/PetItemsList";
import PetItemDetail from "./PetItemDetail/PetItemDetail";
import Header from "./Header/Header.jsx";
import Thankyou from "./Thankyou/Thankyou.jsx";
import Error from "./Error/Error.jsx";
import Footer from "./Footer/Footer.jsx";
import ContactUs from "./ContactUs/ContactUs";

function App() {

  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch( 
          "http://demo2087294.mockable.io/"
        );
        const responseJson = await response.json();
        setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayDogsItemsList;
  let displayCatsItemsList;
  let displayRabbitsItemsList;
  let displayBirdsItemList;
  let displayOthersItemsList;

  if(!isEmpty(fetchedData)){
    var dogsCategory = Object.values(fetchedData.dogs)
    var catsCategory = Object.values(fetchedData.cats)
    var rabbitsCategory = Object.values(fetchedData.rabbits)
    var birdsCategory =  Object.values(fetchedData.birds)
    var othersCategory =  Object.values(fetchedData.others)

    displayDogsItemsList = (
      <PetItemsList petItemList={dogsCategory} pagetitle="Dogs"/>      
    )
    displayCatsItemsList = (
      <PetItemsList petItemList={catsCategory} pagetitle="Cats"/>
    )
    displayRabbitsItemsList = (
      <PetItemsList petItemList={rabbitsCategory} pagetitle="Rabbits"/>
    )
    displayBirdsItemList = (
      <PetItemsList petItemList={birdsCategory} pagetitle="Birds"/>
    )
    displayOthersItemsList = (
      <PetItemsList petItemList={othersCategory} pagetitle="Others"/>
    )

  }
  else{
    displayDogsItemsList=<div>Data is fetching!</div>;
  }

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/dogs"
          exact
          render={() => displayDogsItemsList}
        />
        <Route
          path="/cats"
          exact
          render={() => displayCatsItemsList}
        />
        <Route
          path="/rabbits"
          exact
          render={() => displayRabbitsItemsList}
        />
        <Route
          path="/birds"
          exact
          render={() => displayBirdsItemList}
        />
        <Route
          path="/others"
          exact
          render={() => displayOthersItemsList}
        />
        <Route
          path="/:category/:categoryid"
          exact
          render={({ match }) => (
            <PetItemDetail className={styles.homepage}
              categoryid={match.params.categoryid}
              category={match.params.category}
            />
          )}
        />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/thankyou" exact component={Thankyou} />
        <Route component={Error} />
      </Switch>
      <Footer/>
      </HashRouter> 
  );
}

export default App;