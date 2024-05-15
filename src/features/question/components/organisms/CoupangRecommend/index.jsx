import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../../Styles';
import Dropdown from '../../../../../components/atoms/Dropdown';
import Logo from '../../../../../components/atoms/Logo';
import SelectInput from '../../../../../components/atoms/SelectInput';
import Text from '../../../../../components/atoms/Text';
import Pagination from '../../../../../components/molecules/Pagination';
import Select from '../../../../../components/molecules/Select';
import Title from '../../../../../components/molecules/Title';
import SaraMaraContext from '../../../../main/stores/SaraMaraContext';
import useCoupang from '../../../hooks/useCoupang';
import Cards from '../../molecules/Cards';
import StyledCounpoangRecommend from './styles';
import KakaoAdFit from '../../../../../components/organisms/KaKaoAdfit.jsx';

const StyledKaKao = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  ${Theme.deviceSize.small} {
    display: none;
  }
`;

export default function CounpangRecommend({ type }) {
  const {
    nowPage,
    categories,
    categoryLoading,
    nowCategory,
    changeNowCategory,
    showingData,
    setNextPage,
    setPrevPage,
    itemLoading,
    updateKeyword,
    maxPage,
  } = useCoupang();
  const { stage, keyword } = useContext(SaraMaraContext);

  useEffect(() => {
    updateKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    if (stage !== 'finish') updateKeyword('');
  }, [stage]);

  return (
    <div>
      <StyledCounpoangRecommend $type={type}>
        {!categoryLoading &&
          (stage === 'finish' && type === 'sara' && !!keyword ? (
            // 사라일 때, 검색 단어로 검색결과 화면에서만 쿠팡 검색 컴포넌트 렌더
            <>
              <Title
                style={{ gap: 0, padding: 0, margin: 0, height: 32, justifyContent: 'center', alignItems: 'center' }}
              >
                <Text
                  label="방금 물어본거 바로"
                  size="16px"
                  color={Theme.color.saraPrimary}
                  bold="700"
                  style={{ margin: '4px 6px auto 0', alignSelf: 'flex-end' }}
                />
                <Logo
                  w="77px"
                  h="20px"
                  logoType="SaraTextOnly"
                  fill={Theme.color.saraPrimary}
                  style={{ alignSelf: 'flex-end', margin: '0 0 auto 0' }}
                />
              </Title>
              <Title
                style={{
                  gap: 0,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Theme.color.saraSecondary,
                  borderRadius: '10px',
                }}
              >
                <Text label={keyword} size="20px" color={Theme.color.saraPrimary} bold="700" />
              </Title>
            </>
          ) : (
            <Title style={{ gap: 0, padding: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Select
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}
              >
                <Select.List>
                  <Dropdown
                    trigger={
                      <SelectInput
                        type={type}
                        value={nowCategory.value}
                        bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                      />
                    }
                  >
                    {categories.map((data) => {
                      return (
                        <Dropdown.Item
                          label={data.value}
                          key={['DropdownItem', data.id]}
                          onClick={() => changeNowCategory(data.id, data.value)}
                        />
                      );
                    })}
                  </Dropdown>
                </Select.List>
              </Select>
              <Text
                className="title-text"
                label={type === 'sara' ? '바로' : '사지'}
                size="16px"
                color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                bold="700"
                style={{ margin: '0px 6px 5px', alignSelf: 'flex-end' }}
              />
              <Logo
                w="77px"
                h="50%"
                logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
                fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                style={{ alignSelf: 'flex-end', marginBottom: '5px' }}
              />
            </Title>
          ))}
        <Cards datas={showingData} />

        {!itemLoading && !categoryLoading && (
          <Pagination
            leftClick={setPrevPage}
            nowPage={nowPage}
            maxPage={maxPage}
            rightClick={setNextPage}
            type={type}
          />
        )}

        <div className="bottom">
          <Text
            color={Theme.color.darkGray}
            label="*위 컨텐츠는 쿠팡 파트너스 활동의 일원으로 금전적 대가를 취할 수 있습니다"
            style={{
              color: `rgba(0,0,0,0.1)`,
              fontSize: 10,
            }}
          />
        </div>
      </StyledCounpoangRecommend>
      {stage === 'finish' && (
        <StyledKaKao>
          <KakaoAdFit unit="DAN-EASB1d4UxiUU45bT" width="320" disabled={false} height="50" />
        </StyledKaKao>
      )}
    </div>
  );
}

CounpangRecommend.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
