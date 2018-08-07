package series

import "errors"

var (
	// ErrInvalidSample represents an invalid series sample value error.
	ErrInvalidSample = errors.New("invalid sample value")
	// ErrInvalidConsolidationFunction represents an invalid series consolidation function error.
	ErrInvalidConsolidationFunction = errors.New("invalid consolidation function")
	// ErrEmptySeries represents a empty series list error.
	ErrEmptySeries = errors.New("no series provided")
	// ErrUnnormalizedSeries represents an unnormalized series list error.
	ErrUnnormalizedSeries = errors.New("unnormalized series")
)
