import React from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { toast } from "react-toastify";
import Pagination from "../common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBar from "../common/searchbar";
class Movies extends React.Component {
  state = {
    movies: [],
    genre: [],
    color: "fa fa-heart",
    pageSize: 4,
    Liked: false,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  searchMovie = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  async componentDidMount() {
    const { data } = await getGenres();
    const genre = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genre, selectedGenre: genre[0] });
  }
  handleDelete = async (movie) => {
    const orignalMovies = this.state.movies;
    const movies = orignalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: orignalMovies });
    }
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].Liked = !movies[index].Liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      movies: allmovies,
      selectedGenre,
      currentPage,
      pageSize,
      sortColumn,
      searchQuery,
    } = this.state;
    let filtered = allmovies;
    if (searchQuery)
      filtered = allmovies.filter((a) => {
        return a.title.toLowerCase().startsWith(searchQuery.toLowerCase());
      });
    else if (selectedGenre && selectedGenre._id)
      filtered = allmovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length } = this.state.movies;
    const { sortColumn } = this.state;
    const { user } = this.props;

    if (length === 0) return <h1>There are no Movies</h1>;
    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genre}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            className="col-sm"
          />
        </div>

        <div className="col">
          {user && (
            <Link className="btn btn-primary m-2" to="/movies/new">
              New Movie
            </Link>
          )}
          <p>Showing {totalCount} movies in the database</p>
          <SearchBar
            onSearch={this.searchMovie}
            value={this.state.searchQuery}
          />
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          <Pagination
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            itemsCount={totalCount}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
