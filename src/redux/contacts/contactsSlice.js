import { INITIAL_STATE } from '../constants.js';
import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { selectContacts } from './contactsSelectors';
import { selectFilter } from '../filters/filterSelectors.js';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: INITIAL_STATE.contacts,

  extraReducers: builder => {
    builder
      // fetchContacts
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // addContact
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      // deleteContact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, contactsFilter) => {
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(contactsFilter.toLowerCase()) ||
        contact.number.includes(contactsFilter)
    );
    return filteredContacts;
  }
);

export const contactsReducer = contactsSlice.reducer;
