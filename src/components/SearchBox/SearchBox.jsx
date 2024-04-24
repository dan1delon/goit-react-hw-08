import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = value => {
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.labelWrapper}>
        <span className={css.label}>Find contacts</span>
        <input
          type="text"
          value={filter}
          onChange={e => onFilter(e.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
