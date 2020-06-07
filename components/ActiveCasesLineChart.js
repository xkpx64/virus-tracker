import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import useTranslation from 'next-translate/useTranslation';

const ActiveCasesLineChart = (props) => {
  const { data, ...rest } = props;
  const { t } = useTranslation();

  return (
    <LineChart
      data={data}
      xtitle={t('home:charts.active_cases_linechart.xtitle')}
      ytitle={t('home:charts.active_cases_linechart.ytitle')}
      colors={['#f6c23e', '#1cc88a', '#e74a3b']}
      download={{ background: '#ffffff', filename: 'COVID-19-Bulgaria_ActiveCasesLineChart' }}
      {...rest}
    />
  );
};

ActiveCasesLineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ActiveCasesLineChart;
