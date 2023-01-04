export const searchCategorySelected = {
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000000',
    fontSize: 16,
    width: 90
  }),
  control: (base: any, state: any) => ({
    ...base,
    color: '#313131',
    backgroundColor: 'inherit',
    borderRadius: 0,
    gap: 4,
    height: 58,
    width: 133,
    border: 'none',
    justifyContent: 'flex-start',
    padding: '0px',
    boxShadow: state.isFocused ? null : null
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    top: 50,
    left: 10,
    width: 150,
    zIndex: 100
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 0,
    color: '#000'
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: 0,
    width: 12,
    height: 12,
    color: '#313131',
    position: 'relative',
    bottom: 5,
    '&:hover': {
      color: '#313131'
    }
  }),
  indicatorSeparator: (styles: any) => ({ display: 'none' }),
  input: (base: any, state: any) => ({
    ...base,
    color: '#000000',
    padding: 0
  }),
  defaultValue: (base: any, state: any) => ({
    ...base,
    color: '#000'
  }),
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: '#313131',
      fontSize: 16,
      fontWeight: 400,
      margin: 0
    }
  },
  ValueContainer: (style: any) => ({
    padding: 0
  })
}

export const sortByStyle = {
  singleValue: (provided: any) => ({
    ...provided,
    color: '#031424',
    fontSize: 14,
    width: 100
  }),
  control: (base: any, state: any) => ({
    ...base,
    color: '#031424',
    backgroundColor: 'inherit',
    borderRadius: 0,
    gap: 4,
    height: 34,
    width: 141,
    border: '1px solid #E6E6E6',
    justifyContent: 'flex-start',
    padding: '0px 10px 0px 2px',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      border: '1px solid #E6E6E6'
    }
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    top: 30,
    left: 0,
    width: 141,
    zIndex: 100
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 0,
    color: '#031424'
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: 0,
    width: 12,
    height: 12,
    color: '#636363',
    position: 'relative',
    bottom: 5,
    '&:hover': {
      color: '#636363'
    }
  }),
  indicatorSeparator: (styles: any) => ({ display: 'none' }),
  input: (base: any, state: any) => ({
    ...base,
    color: '#031424',
    padding: 0
  }),
  defaultValue: (base: any, state: any) => ({
    ...base,
    color: '#626262'
  }),
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: '#626262',
      fontSize: 14,
      fontWeight: 400,
      margin: 0,
      width: 100
    }
  },
  ValueContainer: (style: any) => ({
    padding: 0
  })
}

export const showProductsStyle = {
  singleValue: (provided: any) => ({
    ...provided,
    color: '#031424',
    fontSize: 14,
    width: 18
  }),
  control: (base: any, state: any) => ({
    ...base,
    color: '#031424',
    backgroundColor: 'inherit',
    borderRadius: 0,
    gap: 0,
    height: 34,
    width: 53,
    border: '1px solid #E6E6E6',
    justifyContent: 'flex-start',
    padding: '0px 8px 0px 2px',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      border: '1px solid #E6E6E6'
    }
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    top: 30,
    left: 0,
    width: 53,
    zIndex: 100
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 0,
    color: '#031424'
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: 0,
    width: 12,
    height: 12,
    color: '#636363',
    position: 'relative',
    bottom: 5,
    '&:hover': {
      color: '#636363'
    }
  }),
  indicatorSeparator: (styles: any) => ({ display: 'none' }),
  input: (base: any, state: any) => ({
    ...base,
    color: '#031424',
    padding: 0
  }),
  defaultValue: (base: any, state: any) => ({
    ...base,
    color: '#626262'
  }),
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: '#626262',
      fontSize: 14,
      fontWeight: 400,
      margin: 0,
      width: 16
    }
  },
  ValueContainer: (style: any) => ({
    padding: 0
  })
}
