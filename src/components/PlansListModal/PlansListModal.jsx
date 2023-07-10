import {
  ModalContainer,
  PlansList,
  PlansItem,
  PlansLink,
  PlansPoster,
  PlansText,
  PlansName,
  PlansYear,
  PlansDeleteButton,
  ButtonClose,
  MoviesCounter,
  PlansHeader,
  ReloadButton,
  NothingBlock,
  ButtonUp,
} from "./PlansListModal.styled";
import {
  useState,
  // useEffect
} from "react";
import { RiCloseLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { getPlansList, deletePlan, moveUp } from "../../api/database";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import poster from "../../media/poster.png";
import { successDeleteToast } from "../../utils/toasters.js";

const PlansListModal = ({
  isFixed,
  isOpenPlansListProfile,
  changeIsPlansListModal,
  plansList,
  setPlansList,
}) => {
  // const [plansList, setPlansList] = useState([]);
  const [rotation, setRotation] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  // useEffect(() => {
  //   getPlansList(supabase, session, setPlansList);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onReload = () => {
    setRotation(true);
    setTimeout(() => {
      setRotation(false);
    }, 1000);
    getPlansList(supabase, session, setPlansList);
  };

  console.log(1234, plansList);

  return (
    <ModalContainer isFixed={isFixed}>
      <PlansHeader isopen={isOpenPlansListProfile}>
        <ReloadButton
          type="button"
          onClick={() => onReload()}
          rotation={rotation}
        >
          <TbReload />
        </ReloadButton>
        <MoviesCounter>{plansList && plansList.length} movies</MoviesCounter>
        <ButtonClose type="button" onClick={changeIsPlansListModal}>
          <RiCloseLine />
        </ButtonClose>
      </PlansHeader>
      {plansList ? (
        <PlansList isopen={isOpenPlansListProfile}>
          {plansList.map((item) => (
            <PlansItem key={item.id}>
              <ButtonUp
                type="button"
                onClick={() => moveUp(supabase, session, item.id, setPlansList)}
              >
                <BsFillArrowUpSquareFill />
              </ButtonUp>
              <PlansLink to={`/?id=${item.movieId}`}>
                <PlansPoster
                  src={
                    item.moviePoster
                      ? `https://image.tmdb.org/t/p/original${item.moviePoster}`
                      : poster
                  }
                  slt="movie poster"
                  width="36"
                />
                <PlansText>
                  <PlansName>{item.movieName}</PlansName>
                  <PlansYear>{item.movieYear}</PlansYear>
                </PlansText>
              </PlansLink>
              <PlansDeleteButton
                type="button"
                onClick={() => {
                  deletePlan(
                    supabase,
                    session,
                    item.movieId,
                    successDeleteToast,
                    setPlansList
                  );
                }}
              >
                <AiFillDelete />
              </PlansDeleteButton>
            </PlansItem>
          ))}
        </PlansList>
      ) : (
        <NothingBlock>
          <p>You haven't planned to watch movies yet</p>
        </NothingBlock>
      )}
    </ModalContainer>
  );
};

export default PlansListModal;
