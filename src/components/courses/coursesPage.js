import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from './action/courseAction';

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: null}
    };

    // THIS THE RECOMMENDED WAY TO BIND AN ACTION TO AVOID PERFORMANCE ISSUE
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // alert(`Success: ${this.state.course.title}`);
    this.props.dispatch(courseAction.createCourse(this.state.course));
  }

  courseList(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        {this.props.courses.map(this.courseList)}
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(Courses);
