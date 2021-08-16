function grid(width) {

  let output = {};

  if(width > 1200){
    output.symbol = 'xl';
  }else if(width > 992){
    output.symbol = 'lg';
  }else if(width > 768){
    output.symbol = 'md';
  }else if(width > 576){
    output.symbol = 'sm';
  }else{
    output.symbol = 'xs'
  }

  return output;
}

export default grid;

/*

// xs --- Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// sm --- Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// md --- Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// lg --- Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// xl --- Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

*/