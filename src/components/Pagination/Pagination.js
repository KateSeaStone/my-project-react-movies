//import PropTypes from 'prop-types';

const Pagination = (props) => {
  return (
    <>
      <h2>Pagination</h2>
      <ul>
        <li>
          <a href="#">&larr;</a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          ...
        </li>

        <li>
          <a href="#">13</a>
        </li>
        <li>
          <a href="#">14</a>
        </li>
        <li className="current__page">
          <a href="#">15</a>
        </li>
        <li>
          <a href="#">16</a>
        </li>
        <li>
          <a href="#">17</a>
        </li>
        <li>...</li>
        <li>
          <a href="#">&rarr;</a>
        </li>

      </ul>
    </>
  )



}

export default Pagination;