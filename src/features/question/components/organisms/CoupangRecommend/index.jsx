import React from 'react';
import PropTypes from 'prop-types';
import StyledCounpoangRecommend from './styles';
import Text from '../../../../../components/atoms/Text';
import Logo from '../../../../../components/atoms/Logo';
import Title from '../../../../../components/molecules/Title';
import { Theme } from '../../../../../Styles';
import Select from '../../../../../components/molecules/Select';
import SelectInput from '../../../../../components/atoms/SelectInput';
import Cards from '../../molecules/Cards';
import useCoupang from '../../../hooks/useCoupang';
import Pagination from '../../../../../components/molecules/Pagination';
import Dropdown from '../../../../../components/atoms/Dropdown';

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
    maxPage,
  } = useCoupang();
  return (
    <StyledCounpoangRecommend>
      <Title style={{ gap: 0, padding: 0, marginBottom: 23 }}>
        <Logo
          w="77px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={{}}
        />
        <Text label=" , 요즘 많이 팔리는" size="16px" color={Theme.color.midGray} bold="700" />
        {!categoryLoading && (
          <Select
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
            }}
          >
            <Select.List>
              <Dropdown
                trigger={
                  <SelectInput
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
        )}
      </Title>
      <Cards datas={showingData} />

      {!itemLoading && !categoryLoading && (
        <Pagination leftClick={setPrevPage} nowPage={nowPage} maxPage={maxPage} rightClick={setNextPage} type={type} />
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
  );
}

CounpangRecommend.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
