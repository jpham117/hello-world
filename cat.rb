class Cat 
	attr_reader :color, :breed
	attr_accessor :name  # attr_accessor covers both functions for :name (attr_reader & attr_writer)
	
	def initialize(color, breed)
		@color = color
		@breed = breed
		@hungry = true
	end # end of initilize method
	
	def feed(food)
		puts "Mmmm, " + food + "!"
		@hungry = false
	end # end of feed method
	
	def hungry?
		if @hungry
			puts "I'm hungry!"
		else
			puts "I'm full!"
		end # end of if/else
		@hungry
	end # end of hungry method

	def speak
		puts "Meow!"
	end # end of speak method

end # end of class cat

kitty = Cat.new("grey", "Persian")
	puts "Let's inspect our new cat:"
	puts kitty.inspect

	puts "What class does our new cat belong to?"
	puts kitty.class

	puts "Is our new cat an object?"
	puts kitty.is_a?(Object)

	puts "What color is our cat"
	puts kitty.color

	puts "Let's give our new cat a name"
	kitty.name = "Betsy"
	puts kitty.name

	puts "Is your cat hungry now?"
	kitty.hungry?
	puts "Let's feed our cat"
	kitty.feed("tuna")
	puts "Is our cat hungry now?"
	kitty.hungry?
	
	puts "Our cat can make noise"
	kitty.speak
