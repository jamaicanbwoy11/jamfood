import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Direction extends Component {
  static propTypes = {
    data: PropTypes.array,
    notes: PropTypes.string,
  }

  render() {
    return(
      <div id={'direction'} className={'row'}>

        {/* Directions */}
        <div className={'col-12 py-3'} >
          <h6 className={'fw-bold'}>Direction</h6 >
            <dl >
              {this.props.data.map((item, index)=>{
                return(
                  <div  key={`${index }`}>
                    <dt className={'px-1'}  >{`Step ${index + 1} `} </dt >
                    <dd className={'px-1'}  > {item } </dd>
                  </div  >
                );
              })
            }

            </dl >
            {this.props.notes && <div ><strong>{'Note: '}</strong>{this.props.notes}</div> }
        </div >

      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return (state.preview.activePreview)?({
    data: state.preview.data.directions,
    notes: state.preview.data.notes,
  }):
  ({
    data: state.recipe.detail.directions,
    notes: state.recipe.detail.notes,
  })
}

export default connect(mapStateToProps)(Direction)
