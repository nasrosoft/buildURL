buildUrl()
The purpose of this exercise is to implement the buildUrl(data), in order to build a proper URL from a specific data.

## data is an object which looks like this:

{
name: 'foo',
timestamps: [
1508349990,
1508350000,
1508357300
]
}

---

[*] name can be any string
[*] timestamps is an array of timestamps <in seconds>

- A valid timestamp is any positive integer number.
- Any invalid value should be ignored.
- There will be at least 1 valid value.

* Expected result
  The expected URL looks like this:
  https://server/record?name=<name>&duration=<duration>&median=<median>

* Name:
  <name> should be the name given by data

* Duration:
  <duration> should be a label describing the duration between the oldest valid timestamp and the newest valid timestamp given by data.

A duration label is the time spent between 2 timestamps. It should be written like this:

"2h51min10s" (if timestamps are 1000 and 11270)
or "0h0min30s" (if timestamps are 1000 and 1030)

Median:
<median> should be a label describing the duration (as defined above) between the oldest valid timestamp and the median valid timestamp.

The median is the value which divides a list in 2 halves.
The median of [1, 3, 5] is 3
The median of [1, 2, 7, 7, 42] is 7

When the number of elements is even, the median is the average of the 2 values at middle of the list.
The median of [1, 1, 3, 5] is 2
The median of [1, 4, 8, 25] is 6

For this test, if the median is a decimal number, we will consider the lower integer value.
For example, with timestamps [1, 2, 5, 6] we will consider median as 3 (and not 3.5).

- Example
  buildUrl({
  name: 'toto',
  timestamps: [
  1508349990,
  1508350000,
  1508357300,
  ],
  }));
  should return

https://server/record?name=toto&duration=2h1min50s&median=0h0min10s;

Please, ensure your code is syntactically correct before submitting.
You can test your code as much as you want.
