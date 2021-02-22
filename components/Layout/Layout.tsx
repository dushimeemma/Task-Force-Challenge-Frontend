import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Task | Force</title>
        <link rel='icon' href='Assets_IW_logo.png' type='image/png' />
      </Head>

      <div className='w-full h-full'>
        <div className='h-60 bg-dark-dark z-0'></div>
        {children}
      </div>
    </>
  );
};
export default Layout;
