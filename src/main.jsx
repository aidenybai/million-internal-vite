import { mount, patch, block } from 'million';

const Main = block((props) => {
  return <div>{props?.message}</div>;
});

const main = Main({ message: 'Hello World' });

mount(main, document.getElementById('root'));

setTimeout(() => {
  patch(main, Main({ message: 'Goodbye' }));
}, 1000);
