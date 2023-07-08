import { ToastContainer } from 'react-toastify';
import { PublicationForm } from './components/Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPublications } from './redux/publications/publications';
import { getPublications } from './redux/Slices/publicationsSlice';
import { Publications } from './components/Publications/Publications';
import { AppWrapper } from './App.styled';

function App() {
  const { entities: publications } = useSelector(getPublications);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublications());
  }, [dispatch]);

  return (
    <AppWrapper>
      <PublicationForm />
      {publications.length > 0 && <Publications publications={publications} />}
      <ToastContainer />
    </AppWrapper>
  );
}

export default App;
