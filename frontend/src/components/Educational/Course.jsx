import { useLocation } from 'react-router-dom';

function Course() {
  const location = useLocation();
  const { course } = location.state;

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course Name: {course.title}</p>
      <p>Rating: {course.likes}</p>
    </div>
  );
}

export default Course;
