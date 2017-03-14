import { combineReducers } from 'redux';
/********** Bulk Upload Refinements */
import DropDownReducer from './DropDownReducer'
import ChapterSelection from './ChapterSelection'
import SubChapterSelection from './SubChapterSelection'
import ChapterList from './Chapters'

export default combineReducers({
   DropDown : DropDownReducer,
   ChapterSelection : ChapterSelection,
   SubChapterSelection : SubChapterSelection,
   ChapterList : ChapterList
});