import React, { Component } from 'react'
import './Picture.less'

class Picturesz extends Component {
    state = {
      flag: false,
      count: 0,
      picture: [
        {
          id: '1',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
      ]
    }
  
    handleChange = () => {
      let {count, flag} = this.state;
      flag = !flag;
      count = flag ? 3 : 0;
      this.setState(() => ({
        flag,
        count
      }))
    }
  
    handleChangeCount = (e) => {
      let {count} = this.state;
      e.target.checked ? count ++ : count --;
      this.setState(() => ({
        count
      }))
    }
  
    render() {
      let {picture, flag, count} = this.state;
      return (
        <div className="tupian">
          <div  className="all">
          <input type="checkbox" onChange={this.handleChange}/> 已选中{count}个
          </div>
          {
            picture.map( item => {
              return (
                <div key={item.id} className="special">
                  <img src={item.url} alt=""/>
                  <input type="checkbox" ref="checkBox" onChange={this.handleChangeCount} />
                </div>
              )
            } )
          }
        </div>
      );
    }
  }
  
  export default Picturesz;