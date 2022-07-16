import React from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Like from "../common/like";
import Table from "../common/table";
class MoviesTable extends React.Component {
  column = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => this.props.onLike(movie)} Liked={movie.Liked} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.column.push(this.deleteColumn);
  }

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <Table
        onDelete={onDelete}
        onLike={onLike}
        column={this.column}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
export default MoviesTable;
