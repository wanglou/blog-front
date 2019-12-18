import React, { Component } from 'react';
import { Icon } from 'antd';
import marked from 'marked';
import './readArticle.scss'
import service from '../../api/index'
import * as filter from '../../utils/index'

class readArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
      }
    }
  }
  async getDetail () {
    let data = await service.article.articleDetail({
      articleId: this.props.match.params.id
    })
    if (data.result.type === 2) {
      data.result.content = marked(data.result.content)
    }
    this.setState({
      detail: data.result
    })
  }
  componentDidMount () {
    this.getDetail()
  }
  render() {
    return (
      <div className="read-article">
        <h2>
          <Icon onClick={() => {this.props.history.push('/home/article')}} type="rollback"/>
          {this.state.detail.title}
        </h2>
        <p>
          <span>
            创建时间：{ filter.dateFormat(this.state.detail.creatTime, 'yyyy-MM-dd HH:mm:ss') }
          </span>
          <span>
            浏览数：{ this.state.detail.readCount }
          </span>
        </p>
        <div dangerouslySetInnerHTML={{__html: this.state.detail.content}}></div>
      </div>
    );
  }
}

export default readArticle;
