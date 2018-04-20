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
      <Global.ScrollContainer>
        <Global.HomeBtn onClick = {this.historyBack}>
          <FontAwesome.FaHome />
        </Global.HomeBtn>
        <Global.Title>
          Hello
        </Global.Title>
        <Style.Portfolio>
          {
            Portfolios.map((portfolio, index)=>{
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
                  <Global.HR />
                </Style.List>
              );
            })
          }

        </Style.Portfolio>
      </Global.ScrollContainer>
    );
  }
}
