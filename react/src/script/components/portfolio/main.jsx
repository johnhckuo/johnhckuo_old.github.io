import React from "react"

import * as Style from "./style.js"
import * as Global from "../Global/style"
import * as FontAwesome from 'react-icons/lib/fa';
import Portfolios from "./data"

export default class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.historyBack = this.historyBack.bind(this);
  }

  historyBack(){
		this.props.history.goBack();
	}

  render(){
    return (
      <Global.Container>
        <Global.HomeBtn onClick = {this.historyBack}>
          <FontAwesome.FaHome />
        </Global.HomeBtn>
        <Global.Title>
          Hello
        </Global.Title>
        <Style.Portfolio>
          {
            Portfolios.map((portfolio)=>{
              return(

                <Style.List>
                <Style.Title>
                  {FontAwesome[portfolio.icon]()}
                  <a href={portfolio.link}>{portfolio.title}</a>
                </Style.Title>
                {
                  portfolio.keywords.map((keyword)=><Style.Tag>{keyword}</Style.Tag>)
                }
                <Style.Description>
                {
                  portfolio.description.map((intro)=><li>{intro}</li>)
                }
                </Style.Description>
                <Global.HR />
                </Style.List>
              );
            })
          }

        </Style.Portfolio>
      </Global.Container>
    );
  }
}
