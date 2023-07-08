import { useState } from 'react';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { PublicationsItem } from './PublicationsItem/PublicationsItem';
import { toast } from 'react-toastify';
import { ListWrapper } from './Publications.styled';

export const Publications = ({ publications }) => {
  const [visiblePublications, setVisiblePublications] = useState([]);
  const [amountOfPublications, setAmountOfPublications] = useState(10);
  const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);

  if (visiblePublications.length === 0) {
    for (let i = amountOfPublications - 10; i < amountOfPublications; i += 1) {
      setVisiblePublications(prevstate => [...prevstate, publications[i]]);
    }
  }

  const onLoadMoreBtnClick = () => {
    if (amountOfPublications > 100) {
      setIsLoadMoreDisabled(true);
      return toast.info('Thats all publications');
    }

    if (publications.length >= 101 && visiblePublications.length % 10 === 0) {
      setVisiblePublications(prevstate => [...prevstate, publications[100]]);
      setAmountOfPublications(prevstate => prevstate + 1);
    }

    for (let i = amountOfPublications; i < amountOfPublications + 10; i += 1) {
      if (i === 100) {
        break;
      }
      setVisiblePublications(prevstate => [...prevstate, publications[i]]);
    }
    setAmountOfPublications(prevstate => prevstate + 10);
  };

  return (
    <ListWrapper>
      <ul>
        {visiblePublications.map(({ id, title, body }) => (
          <PublicationsItem key={id} title={title} body={body} />
        ))}
      </ul>
      <LoadMoreBtn
        onLoadMoreBtnClick={onLoadMoreBtnClick}
        isLoadMoreDisabled={isLoadMoreDisabled}
      />
    </ListWrapper>
  );
};
