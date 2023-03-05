import NavMenu from "./NavMenu";

const Header = () =>{
    return(
        <header>
            <div className="flex py-5 px-3">
                <div className="flex item-center pt-3">
                    {/* Add Logo */}
                </div>
                <div className="flex-grow flex items-center z-20"><NavMenu/></div>
                <div className="flex item-center">
                    <div class="space-y-2 lg:hidden">
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                        <div class="w-8 h-0.5 bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;