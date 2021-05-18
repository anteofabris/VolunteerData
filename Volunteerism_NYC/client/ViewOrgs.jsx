import React from 'react';
import Org from './Org.jsx';
import axios from 'axios';


class ViewOrgs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orgsList: null
    }
    this.getList = this.getList.bind(this)
  }

  getList () {
    axios.get(`/orgs/${this.props.zip}`)
    .then((response) => {
      console.log('got our orgs response! ', response.data)
      this.setState({
        orgsList: response.data
      })
    })
    .catch((err) => {
      console.log('err in our axios get for orgs: ', err)
    })
  }

  componentDidMout () {
    // axios get for orgs by zip id
    this.getList()

  }

  componentDidUpdate (prevProps) {
    if (this.props.zip !== prevProps.zip) {
      this.getList()
    }
  }

  render() {
console.log('hello orgs list!')
    if (this.state.orgsList) {
      return (<div id="orgs-list">
        ORGS:
        {this.state.orgsList.map((org, index) =>
          <Org org={org} key={index} />
        )}

      </div>)
    } else {
      return null;
    }
  }
}

export default ViewOrgs;