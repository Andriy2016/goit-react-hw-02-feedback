import { StatList, StatItem } from './Statistics.styled';
import customizeText from 'utils/customizeText';
import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <>
      <StatList>
        {Object.keys(props).map(el => {
          return (
            <StatItem key={el}>
              {customizeText(el)}: {props[el]}
            </StatItem>
          );
        })}
      </StatList>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};