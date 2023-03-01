import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import { unstable_useId as useId } from '@mui/utils';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import esLocale from 'date-fns/locale/es';

import { createTurn } from '../actions/userActions';

import {
  useLocaleText,
  WrapperVariantContext,
} from '@mui/x-date-pickers/internals';

const CustomActionBar = (props) => {
  const { onAccept, onClear, onCancel, onSetToday, actions } = props;
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const localeText = useLocaleText();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = useId();

  const actionsArray =
    typeof actions === 'function' ? actions(wrapperVariant) : actions;

  if (actionsArray == null || actionsArray.length === 0) {
    return null;
  }

  const menuItems = actionsArray?.map((actionType) => {
    switch (actionType) {
      case 'clear':
        return (
          <MenuItem
            data-mui-test="clear-action-button"
            onClick={() => {
              onClear();
              setAnchorEl(null);
            }}
            key={actionType}
          >
            Limpiar
          </MenuItem>
        );

      case 'cancel':
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onCancel();
            }}
            key={actionType}
          >
            {localeText.cancelButtonLabel}
          </MenuItem>
        );

      case 'accept':
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onAccept();
            }}
            key={actionType}
          >
            {localeText.okButtonLabel}
          </MenuItem>
        );

      case 'today':
        return (
          <MenuItem
            data-mui-test="today-action-button"
            onClick={() => {
              setAnchorEl(null);
              onSetToday();
            }}
            key={actionType}
          >
            Hoy
          </MenuItem>
        );

      default:
        return null;
    }
  });

  return (
    <DialogActions>
      <Button
        id={`picker-actions-${id}`}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        Acciones
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': `picker-actions-${id}`,
        }}
      >
        {menuItems}
      </Menu>
    </DialogActions>
  );
};

CustomActionBar.propTypes = {
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(['accept', 'cancel', 'clear', 'today'])),
    PropTypes.func,
  ]),
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSetToday: PropTypes.func.isRequired,
};

export default function Calendar(props) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(dayjs(props.onSetToday));

  const dateTurn = `${value.$y}-${
    value.$M + 1 < 10 ? `0${value.$M + 1}` : value.$M + 1
  }-${value.$D < 10 ? `0${value.$D}` : value.$D} ${value.$H}:${
    value.$m + 1 < 10 ? `0${value.$m}` : value.$m
  }:00`;

  const submitHandler = () => {
    dispatch(createTurn(props.id, dateTurn));
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker
          locale={esLocale}
          ampm={false}
          onChange={(newValue) => setValue(newValue)}
          value={value}
          renderInput={(params) => <TextField {...params} />}
          components={{
            ActionBar: CustomActionBar,
          }}
          componentsProps={{
            actionBar: {
              actions: ['today', 'clear'],
            },
          }}
        />
      </LocalizationProvider>

      <div className="flex items-center justify-center mt-10">
        <Link to="/" onClick={submitHandler}>
          <button className="bg-main-bg text-white w-[170px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
            Solicitar turno
          </button>
        </Link>
      </div>
    </div>
  );
}
