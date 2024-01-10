import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../../../../../Styles';
import Dropdown from '../../../../../components/atoms/Dropdown';
import Logo from '../../../../../components/atoms/Logo';
import SelectInput from '../../../../../components/atoms/SelectInput';
import Text from '../../../../../components/atoms/Text';
import Pagination from '../../../../../components/molecules/Pagination';
import Select from '../../../../../components/molecules/Select';
import Title from '../../../../../components/molecules/Title';
import useCoupang from '../../../hooks/useCoupang';
import Cards from '../../molecules/Cards';
import StyledCounpoangRecommend from './styles';

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
      <Title style={{ gap: 0, padding: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
        {!categoryLoading && (
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
        <Text
          label="바로&nbsp;&nbsp;"
          size="16px"
          color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          bold="700"
        />
        <Logo
          w="77px"
          h="36px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={{}}
        />
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
