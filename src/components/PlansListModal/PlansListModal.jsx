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
  ButtonUp,
} from "./PlansListModal.styled";
import { useState } from "react";
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
  const [rotation, setRotation] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  const onReload = () => {
    setRotation(true);
    setTimeout(() => {
      setRotation(false);
    }, 1000);
    getPlansList(supabase, session, setPlansList);
  };

  return (
    <ModalContainer isFixed={isFixed}>
      <PlansHeader isopen={isOpenPlansListProfile}>
        <MoviesCounter>
          Plans: {plansList && plansList.length}{" "}
          {plansList.length === 1 ? "movie" : "movies"}
        </MoviesCounter>
        <ReloadButton
          type="button"
          onClick={() => onReload()}
          rotation={rotation}
        >
          <TbReload />
        </ReloadButton>
        <ButtonClose type="button" onClick={changeIsPlansListModal}>
          <RiCloseLine />
        </ButtonClose>
      </PlansHeader>
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
    </ModalContainer>
  );
};

export default PlansListModal;
