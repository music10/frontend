import React, { useMemo } from 'react';
import { css } from '@emotion/native';
import { Svg, Circle, Line, SvgProps, Text } from 'react-native-svg';
import { useTheme } from '@emotion/react';

export interface ResultProps extends SvgProps {
  guess: number;
  all: number;
}

const CHART_OUTER_WIDTH = 540;
const STROKE_WIDTH = 15;
const CHART_INNER_WIDTH = CHART_OUTER_WIDTH - 2 * STROKE_WIDTH;
const CIRCUMFERENCE = CHART_INNER_WIDTH * Math.PI;

export const Result: React.FC<ResultProps> = ({ guess, all, ...props }) => {
  const circumferenceProgress = useMemo(() => (guess / all) * CIRCUMFERENCE, [
    guess,
    all,
  ]);
  const theme = useTheme();

  return (
    <Svg
      viewBox={`0 0 ${CHART_OUTER_WIDTH} ${CHART_OUTER_WIDTH}`}
      fill="none"
      style={css`
        width: 50%;
        height: 50%;
        margin: 0 auto;
      `}
      {...props}
    >
      <Circle
        transform="rotate(-90)"
        r={CHART_INNER_WIDTH / 2}
        cx={-CHART_OUTER_WIDTH / 2}
        cy={CHART_OUTER_WIDTH / 2}
        stroke={theme.colors.main}
        opacity={0.2}
        strokeWidth={STROKE_WIDTH}
      />
      <Circle
        transform="rotate(-90)"
        strokeDasharray={`${circumferenceProgress}px ${CIRCUMFERENCE}px`}
        strokeWidth={STROKE_WIDTH}
        stroke={theme.colors.accent}
        r={CHART_INNER_WIDTH / 2}
        cx={-CHART_OUTER_WIDTH / 2}
        cy={CHART_OUTER_WIDTH / 2}
      />
      <Line
        opacity={0.5}
        x1={173}
        y1={405}
        x2={426}
        y2={152}
        stroke={theme.colors.main}
        strokeWidth={7}
      />
      <Text
        x={200}
        y={250}
        fontSize={160}
        fill={theme.colors.main}
        textAnchor="middle"
      >
        {guess}
      </Text>
      <Text x={310} y={380} fontSize={100} fill={theme.colors.main}>
        {all}
      </Text>
    </Svg>
  );
};
