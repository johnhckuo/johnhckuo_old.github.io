import React from "react"

import * as Style from "./style.js"
import * as Global from "../global/style"
import * as FontAwesome from 'react-icons/lib/fa';
import Portfolios from "./data"

export default class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.historyBack = this.historyBack.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {init: false, hashtagSearch: ""};
  }

  historyBack(){
		this.props.history.goBack();
	}

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 500)
  }

  componentWillUnmount(){
    this.setState({
      init:false
    })
  }

  filter(e){
    this.setState({
      hashtagSearch: e.target.value + ""
    });
  }

  render(){
    return (
      <Global.ScrollContainer width="65%" active={this.state.init}>
        <Global.HomeBtn onClick = {this.historyBack}>
          <FontAwesome.FaHome />
        </Global.HomeBtn>
        <Global.Title>
          <h2>Portfolio</h2>
          <Global.HR />
          <h3>These are my after-school projects And I'm proud of them <FontAwesome.FaHeart /></h3>
        </Global.Title>
        <Style.Filter>
          <Style.FilterInput onChange={this.filter.bind(this)} list="hashtags"/>
          <Style.AutocompleteInput value={this.state.hashtagSearch} />
          <HashTagList />
        </Style.Filter>
        <Global.HR />

        <Style.Portfolio>
          {
            Portfolios.map((portfolio, index)=>{
              if (this.state.hashtagSearch !== "" && portfolio.keywords.indexOf(this.state.hashtagSearch) === -1){
                return null;
              }
              return(

                <Style.List key={index}>
                  <Style.Title>
                    {FontAwesome[portfolio.icon]()}
                    <a href={portfolio.link}>{portfolio.title}</a>
                  </Style.Title>
                  {
                    portfolio.keywords.map((keyword, index)=><Style.Tag key={index}>{keyword}</Style.Tag>)
                  }
                  <Style.Description>
                  {
                    portfolio.description.map((intro, index)=><li key={index}>{intro}</li>)
                  }
                  </Style.Description>
                </Style.List>
              );
            })
          }

        </Style.Portfolio>
      </Global.ScrollContainer>
    );
  }
}


const HashTagList = function(props){
  var currentHashtags = {};
  return(
    <datalist id="hashtags">
      {
        Portfolios.map((portfolio)=>{
          return portfolio.keywords.map((keyword, index)=>{
            if (currentHashtags[keyword] == undefined){
              currentHashtags[keyword] = true;
              return <option key={index} label={keyword} value={keyword}></option>
            }
          })
        })
      }
    </datalist>
  );
}