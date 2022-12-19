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
      fontWeight: 600,
      margin: 0
    }
  },
  ValueContainer: (style: any) => ({
    padding: 0
  })
}
