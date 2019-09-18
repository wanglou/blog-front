import React, { Component } from 'react';
import './article.scss'
import service from '../../api/index'
import * as filter from '../../utils/index'

class article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: [
        { title: '第一篇文章', content: '也许是因为年轻，总是充满着激情对待身边的所有事情，嘴角时常挂着青春的誓言。因为年轻，我们拥抱着希望，就像随风展翅的风筝一样，只要我们越跑越快，风筝就会越飞越高，希望也就越来越高，高得可以藐视世间万物，高得可以穿越云层，羡煞每一个云层下的看客。我们有的是脚力，即使一不小心被路上的石子绊倒了，伤得筋骨疼痛了，我们毫不畏惧，用手擦一擦痛处，拍掉身上的尘土，强忍住那一丝疼痛，继续前行', time: '2019-9-17 17:40:22', readCount: '5' },
        { title: '第一篇文章', content: '也许是因为年轻，总是充满着激情对待身边的所有事情，嘴角时常挂着青春的誓言。因为年轻，我们拥抱着希望，就像随风展翅的风筝一样，只要我们越跑越快，风筝就会越飞越高，希望也就越来越高，高得可以藐视世间万物，高得可以穿越云层，羡煞每一个云层下的看客。我们有的是脚力，即使一不小心被路上的石子绊倒了，伤得筋骨疼痛了，我们毫不畏惧，用手擦一擦痛处，拍掉身上的尘土，强忍住那一丝疼痛，继续前行', time: '2019-9-17 17:40:22', readCount: '5' }
      ],
      typeList: [
        { name: '爱丽丝飞机上' },
        { name: '有感' },
        { name: '有感' },
        { name: '有感' }
      ]
    };
  }
  // 获取文章列表
  async getArticleList () {
    let data = await service.article.getArticleList()
    data.result.forEach(item => {
      this.state.typeList.forEach(child => {
        if (item.categoryId === child.id) {
          item.categoryName = child.name
        }
      })
    })
    this.setState({
      activeList: data.result
    })
  }
  // 获取分类列表
  async articleCategoryList () {
    let data = await service.article.articleCategoryList()
    this.setState({
      typeList: data.result
    })
  }
  async componentDidMount () {
    await this.articleCategoryList()
    await this.getArticleList()
  }
  render() {
    return (
      <div className="article">
        <div>
          { this.state.typeList.map((item, index) => {
            return <span key={index}>
              { item.name }
            </span>
          }) }
        </div>
        <ul>
          { this.state.activeList.map((item, index) => {
            return <li key={index}>
              <h3>
                <span>
                  {item.title}
                </span>
              </h3>
              <p dangerouslySetInnerHTML={{__html: item.content.slice(0, 500)}}>
              </p>
              <p>
                <span>
                  创建时间：{ filter.dateFormat(item.creatTime, 'yyyy-MM-dd HH:mm:ss') }
                </span>
                <span>
                  标签：{ item.categoryName}
                </span>
                <span>
                  浏览数：{ item.readCount }
                </span>
              </p>
            </li>
          }) }
        </ul>
      </div>
    );
  }
}

export default article;
