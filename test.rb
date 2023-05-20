students = [
  { name: '山田', age: '12' },
  { name: '作田', age: '13' },
  { name: '村畑', age: '14' },
  { name: '前田', age: '15' },
  { name: '柿本', age: '16' },
  { name: '森本', age: '17' }
]

students.each do |student|
  puts "学生名: #{student[:name]}, 年齢: #{student[:age]}"
end

counteries = [
  { name: '山田', age: '12' },
  { name: '作田', age: '13' },
  { name: '村畑', age: '14' },
  { name: '前田', age: '15' },
  { name: '柿本', age: '16' },
  { name: '森本', age: '17' }
]

counteries.each do |countery|
  puts "学生名: #{countery[:name]}, 学生年齢: #{countery[:age]}"
end
