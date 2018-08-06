言語やライブラリによるクエリ文字列の配列値取扱いの違い
----

### Ruby
##### Rack::Utils.parse_nested_query
```ruby
# 値が後勝ちになる
Rack::Utils.parse_nested_query("a=0&a=1")
=> {"a"=>"1"}

# 値が配列になる。キーは"a"
Rack::Utils.parse_nested_query("a[]=0&a[]=1")
=> {"a"=>["0", "1"]}
```

##### CGI.parse
```ruby
# 値が配列になる。キーは"a"
CGI.parse("a=1&a=0")
=> {"a"=>["1", "0"]}

# 値が配列になる。キーは"a[]"
CGI.parse("a[]=1&a[]=0")
=> {"a[]"=>["1", "0"]}
```

### Go
##### url.ParseQuery
```go
// 値が配列になる。キーは"a"
v, _ := url.ParseQuery("a=0&a=1")
fmt.Printf("%v", v)
// map[a:[0 1]]

// 値が配列になる。キーは"a[]"
v, _ := url.ParseQuery("a[]=0&a[]=1")
fmt.Printf("%v", v)
// map[a[]:[0 1]]
```
